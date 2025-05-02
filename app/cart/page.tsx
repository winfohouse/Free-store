"use client"
import { useState } from "react";
import SidebarCart from "../products/product";
import { useRouter } from "next/navigation";

export default function Cart() {
 const router = useRouter()
  const [activeTab, setActiveTab] = useState<"cart" | "wishlist">("cart")
  return (<>
    <SidebarCart
      isOpen={true}
      onClose={() => {router.back() }}
      activeTab={activeTab}
      onTabChange={newTab => setActiveTab(newTab)}
    />
  </>)
} 
