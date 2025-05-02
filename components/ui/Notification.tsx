'use client'
import { useState, useEffect } from 'react';
import { X, Bell, CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react';

/**
 * Individual Notification Item Component
 */
type NotificationType = "success" | "warning" | "error" | "info";

type Notification = ({
  id: number;
  type: NotificationType;
  title: string;
  message: string;
  time: string;
  read: boolean;
  actionText?: string;
});

type NotificationItemProps = {
  notification: Notification;
  onClose: (id: number) => void,
  onActionClick: (Id: number) => void;
}

type Toast = { id: number; type: NotificationType; title: string; }
type ToastNotificationProps = {
  notification: Toast;
  onClose: (id: number) => void,
}

const NotificationItem = ({
  notification,
  onClose,
  onActionClick
}: NotificationItemProps) => {
  const { id, type, title, message, time, read, actionText } = notification;

  // Determine icon based on notification type
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="text-green-500" size={20} />;
      case 'error':
        return <AlertCircle className="text-red-500" size={20} />;
      case 'warning':
        return <AlertTriangle className="text-amber-500" size={20} />;
      case 'info':
      default:
        return <Info className="text-blue-500" size={20} />;
    }
  };

  // Get background color based on notification type
  const getBgColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'error':
        return 'bg-red-50 border-red-200';
      case 'warning':
        return 'bg-amber-50 border-amber-200';
      case 'info':
      default:
        return 'bg-blue-50 border-blue-200';
    }
  };

  return (
    <div className={`border rounded-lg mb-3 ${read ? 'opacity-60' : ''} ${getBgColor()}`}>
      <div className="p-4">
        <div className="flex justify-between">
          <div className="flex">
            <div className="mr-3 mt-1">
              {getIcon()}
            </div>
            <div>
              <h3 className="font-medium text-gray-800">{title}</h3>
              <p className="text-sm text-gray-600 mt-1">{message}</p>

              {actionText && (
                <button
                  onClick={() => onActionClick(id)}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium mt-2"
                >
                  {actionText}
                </button>
              )}

              <p className="text-xs text-gray-500 mt-2">{time}</p>
            </div>
          </div>

          <button
            onClick={() => onClose(id)}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close notification"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Toast Notification Component
 */
const ToastNotification = ({ notification, onClose }: ToastNotificationProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-dismiss after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose(notification.id), 300); // Allow time for animation
    }, 5000);

    return () => clearTimeout(timer);
  }, [notification.id, onClose]);

  // Determine icon based on notification type
  const getIcon = () => {
    switch (notification.type) {
      case 'success':
        return <CheckCircle className="text-white" size={18} />;
      case 'error':
        return <AlertCircle className="text-white" size={18} />;
      case 'warning':
        return <AlertTriangle className="text-white" size={18} />;
      case 'info':
      default:
        return <Info className="text-white" size={18} />;
    }
  };

  // Get background color based on notification type
  const getBgColor = () => {
    switch (notification.type) {
      case 'success':
        return 'bg-green-600';
      case 'error':
        return 'bg-red-600';
      case 'warning':
        return 'bg-amber-600';
      case 'info':
      default:
        return 'bg-blue-600';
    }
  };

  return (
    <div
      className={`transform transition-all duration-300 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}
    >
      <div className={`rounded-lg shadow-lg ${getBgColor()} text-white flex items-center`}>
        <div className="p-2 flex-shrink-0">
          {getIcon()}
        </div>
        <div className="py-2 px-3">
          <p className="font-medium">{notification.title}</p>
        </div>
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(() => onClose(notification.id), 300);
          }}
          className="p-2 hover:bg-white hover:bg-opacity-10 rounded-full ml-auto mr-1"
          aria-label="Close notification"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

/**
 * Main Notification Center Component
 */
const NotificationCenter = () => {
  // State for notifications drawer
  const [isOpen, setIsOpen] = useState(false);
  // State for count badge
  const [unreadCount, setUnreadCount] = useState(3);

  // Sample notifications data
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'success',
      title: 'Order Confirmed',
      message: 'Your order #12345 has been confirmed and is being processed.',
      time: '10 minutes ago',
      read: false,
      actionText: 'View Order'
    },
    {
      id: 2,
      type: 'info',
      title: 'New Feature Available',
      message: 'Check out our new dashboard with improved analytics!',
      time: '2 hours ago',
      read: false,
      actionText: 'Explore Now'
    },
    {
      id: 3,
      type: 'warning',
      title: 'Limited Stock Alert',
      message: 'The item "Wireless Headphones" is running low on stock.',
      time: '5 hours ago',
      read: false
    },
    {
      id: 4,
      type: 'error',
      title: 'Payment Failed',
      message: 'Your recent payment for order #54321 could not be processed.',
      time: '1 day ago',
      read: true,
      actionText: 'Update Payment'
    }
  ]);

  // State for toast notifications
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Mark notification as read
  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, read: true } : notif
    ));

    // Update unread count
    setUnreadCount(prev => Math.max(0, prev - 1));
  };

  // Delete notification
  const deleteNotification = (id: number) => {
    const notification = notifications.find(n => n.id === id);
    setNotifications(notifications.filter(notif => notif.id !== id));

    // Update unread count if it was unread
    if (notification && !notification.read) {
      setUnreadCount(prev => Math.max(0, prev - 1));
    }
  };

  // Handle action click
  const handleActionClick = (id: number) => {
    // Mark as read when action is clicked
    markAsRead(id);

    // In a real app, this would navigate or perform an action
    console.log(`Action clicked for notification ${id}`);

    // Close the notification drawer
    setIsOpen(false);
  };

  // Mark all as read
  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
    setUnreadCount(0);
  };

  // Toggle the notification drawer
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Show a toast notification
  const showToast = (type: NotificationType, title: string) => {
    const newToast = {
      id: Date.now(),
      type,
      title
    };

    setToasts(prev => [...prev, newToast]);
  };

  // Dismiss a toast
  const dismissToast = (id: number) => {
    setToasts(toasts.filter(toast => toast.id !== id));
  };

  // Demo function to add a new notification
  const addDemoNotification = () => {
    const titles = {
      success: 'Operation Successful',
      info: 'Information Update',
      warning: 'Attention Required',
      error: 'Error Occurred'
    };

    const messages = {
      success: 'Your action was completed successfully.',
      info: 'New information is available for your account.',
      warning: 'Please review your account settings.',
      error: 'Something went wrong with your last action.'
    };

    const types: NotificationType[] = ['success', 'info', 'warning', 'error'];
    const type = types[Math.floor(Math.random() * types.length)];

    const newNotification = {
      id: Date.now(),
      type,
      title: titles[type],
      message: messages[type],
      time: 'Just now',
      read: false,
      actionText: type === 'error' ? 'Retry' : 'View Details'
    };

    setNotifications([newNotification, ...notifications]);
    setUnreadCount(prev => prev + 1);

    // Also show a toast
    showToast(type, titles[type]);
  };

  // Handle escape key press to close drawer
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div className="relative">
      {/* Notification Bell Button */}
      <button
        onClick={toggleDrawer}
        className="relative p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Notifications"
      >
        <Bell size={20} />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Toast Notifications - Fixed at bottom right */}
      <div className="fixed bottom-4 right-4 z-50 space-y-2 w-64">
        {toasts.map(toast => (
          <ToastNotification
            key={toast.id}
            notification={toast}
            onClose={dismissToast}
          />
        ))}
      </div>

      {/* Notification Drawer */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute right-0 mt-2 w-80 max-h-96 bg-white rounded-lg shadow-lg overflow-hidden z-50">
            <div className="border-b">
              <div className="flex items-center justify-between p-4">
                <h2 className="font-semibold">Notifications</h2>
                <div className="flex gap-2">
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllAsRead}
                      className="text-xs text-blue-600 hover:text-blue-800"
                    >
                      Mark all as read
                    </button>
                  )}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Filter tabs */}
              <div className="flex border-b px-2">
                <button className="py-2 px-2 border-b-2 border-blue-600 text-blue-600 text-sm font-medium">
                  All
                </button>
                <button className="py-2 px-2 text-gray-500 hover:text-gray-700 text-sm">
                  Unread
                </button>
                <button className="ml-auto text-xs text-blue-600 hover:text-blue-800 py-2 px-2">
                  {/* In a real app, this would clear notifications */}
                  Clear All
                </button>
              </div>
            </div>

            {/* Notification list */}
            <div className="overflow-y-auto max-h-64 p-3">
              {notifications.length === 0 ? (
                <div className="text-center py-8">
                  <Bell size={32} className="mx-auto text-gray-300 mb-2" />
                  <p className="text-gray-500">No notifications</p>
                </div>
              ) : (
                notifications.map(notification => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                    onClose={deleteNotification}
                    onActionClick={handleActionClick}
                  />
                ))
              )}
            </div>

            {/* Footer with demo button */}
            <div className="border-t p-3">
              <button
                onClick={addDemoNotification}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 text-sm font-medium"
              >
                Demo: Add New Notification
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NotificationCenter;
