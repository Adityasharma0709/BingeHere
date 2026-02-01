import { useState } from "react";
import {
  Bell,
  ShoppingBag,
  Tv,
  CreditCard,
  HelpCircle,
  Settings,
  Gift,
  RefreshCcw,
  Lock
} from "lucide-react";

const menuItems = [
  { title: "Notifications", subtitle: "", icon: Bell, locked: false },
  { title: "Your Orders", subtitle: "View all your bookings & purchases", icon: ShoppingBag, locked: true },
  { title: "Stream Library", subtitle: "Rented & Purchased Movies", icon: Tv, locked: true },
  { title: "Play Credit Card", subtitle: "View your Play Credit Card details and offers", icon: CreditCard, locked: false },
  { title: "Help & Support", subtitle: "View commonly asked queries and Chat", icon: HelpCircle, locked: false },
  { title: "Accounts & Settings", subtitle: "Location, Payments, Permissions & More", icon: Settings, locked: true },
  { title: "Rewards", subtitle: "View your rewards & unlock new ones", icon: Gift, locked: false },
  { title: "BookAChange", subtitle: "", icon: RefreshCcw, locked: false },
];

const SideMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button onClick={() => setOpen(true)} className="text-2xl">
        ☰
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[320px] bg-white z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Hey!</h2>

          <div className="mt-3 flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <Gift className="text-red-500" size={28} />
              <p className="text-sm text-gray-600">
                Unlock special offers & great benefits
              </p>
            </div>
            <button className="border border-red-500 text-red-500 px-3 py-1 text-sm rounded-md">
              Login / Register
            </button>
          </div>
        </div>

        {/* Menu List */}
        <div className="divide-y">
          {menuItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`flex items-center gap-3 p-4 cursor-pointer ${
                  item.locked ? "text-gray-400" : "hover:bg-gray-100"
                }`}
              >
                <Icon size={20} />

                <div className="flex-1">
                  <p className="text-sm font-medium">{item.title}</p>
                  {item.subtitle && (
                    <p className="text-xs text-gray-500">{item.subtitle}</p>
                  )}
                </div>

                {item.locked ? <Lock size={16} /> : <span className="text-lg">›</span>}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideMenu;
