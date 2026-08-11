export const WHATSAPP_URL = "https://wa.me/923426988268?text=Hi%2C%20I%27d%20like%20to%20order%20from%20HOTBOX";
export const PHONE = "+923426988268";

export type MenuItem = { name: string; price?: string; variants?: string };
export type MenuCategory = { id: string; label: string; items: MenuItem[] };

const rows = (items: Array<[string, string?, string?]>): MenuItem[] =>
  items.map(([name, price, variants]) => ({ name, price, variants }));

export const menuCategories: MenuCategory[] = [
  { id: "snacks", label: "Snacks", items: rows([
    ["Finger Fish (5 pcs / fries / sauce)", "Rs. 850"], ["Fish and Chips", "Rs. 800"], ["Nuggets", "Rs. 350 / 650", "6 pc / 12 pc"], ["Fries", "Rs. 200 / 250 / 350", "S / L / F"], ["Loaded Fries", "Rs. 350 / 650", "S / L"], ["Garlic Mayo Fries", "Rs. 350"], ["Cheese Fries", "Rs. 300"], ["Pizza Fries", "Rs. 400 / 700", "S / L"], ["Masala Fries", "Rs. 250 / 350", "S / L"], ["Supreme Nachos", "Rs. 300 / 550", "S / L"],
  ])},
  { id: "fried-chicken", label: "Fried Chicken", items: rows([
    ["Fried Chicken", "Rs. 250 / 1,200 / 2,400", "1 / 5 / 10 pc"], ["Crispy Wings", "Rs. 350 / 680", "6 / 12 pc"], ["BBQ Wings", "Rs. 400 / 780", "6 / 12 pc"], ["Buffalo Wings", "Rs. 400 / 780", "6 / 12 pc"], ["Hot Shots", "Rs. 350 / 680", "6 / 12 pc"], ["Chicken Strips", "Rs. 450 / 850", "6 / 12 pc"],
  ])},
  { id: "strips-dips-box", label: "Strips Dips Box", items: rows([["8 Chicken Strips, 1 Large Fries, 3 Sauce Dips, 4 Nuggets, 2 Regular Drinks", "Rs. 1,250"]]) },
  { id: "sandwiches", label: "Sandwiches", items: rows([["Chicken Sandwich", "Rs. 300"], ["Club Sandwich", "Rs. 450"], ["Mexican Sandwich", "Rs. 600"], ["Hot Box Sandwich", "Rs. 550"]]) },
  { id: "wraps", label: "Wraps", items: rows([["Chicken Wrap", "Rs. 350"], ["Grilled Wrap", "Rs. 400"], ["Zinger Wrap", "Rs. 450"], ["Special Wrap", "Rs. 550"]]) },
  { id: "soups", label: "Soups", items: rows([["Chicken Corn Soup", "Rs. 350 / 650", "S / L"], ["Hot and Sour Soup", "Rs. 400 / 750", "S / L"], ["Vegetable Soup", "Rs. 350 / 650", "S / L"], ["Hot Box Special Soup", "Rs. 450 / 850", "S / L"]]) },
  { id: "chai-coffees", label: "Chai & Coffees", items: rows([["Hotbox Special Tea (Sugar / Gurr)", "Rs. 100"], ["Latte Coffee", "Rs. 200"], ["Cappuccino", "Rs. 250"]]) },
  { id: "platters", label: "Platters", items: rows([["Shawarma Platter (2 warm pita, shawarma chicken, salad, loaded fries, real mayo sauce)", "Rs. 700"], ["Savour (rice, shami kabab, chicken piece, regular drink, salad)", "Rs. 600"]]) },
  { id: "sauces", label: "Sauces", items: rows([["Mustard / Thousand Island / Real Mayo", "Rs. 50"], ["Shawarma / Garlic Mayo / Pizza Sauce", "Rs. 50"]]) },
  { id: "regular-pizzas", label: "Regular Pizzas", items: rows([["Chicken Fajita Pizza", "Rs. 600 / 1,150 / 1,550 / 2,000", "S / M / L / F"], ["BBQ Tikka Pizza", "Rs. 600 / 1,150 / 1,550 / 2,000", "S / M / L / F"], ["Malai Boti Pizza", "Rs. 600 / 1,150 / 1,550 / 2,000", "S / M / L / F"], ["Chicken Supreme", "Rs. 600 / 1,150 / 1,550 / 2,000", "S / M / L / F"], ["Kabab Pizza", "Rs. 600 / 1,150 / 1,550 / 2,000", "S / M / L / F"], ["Four Season Pizza", "Rs. 1,250 / 1,650 / 2,000", "M / L / F"]]) },
  { id: "special-pizzas", label: "Special Pizzas", items: rows([["Crown Crust Pizza", "Rs. 1,300 / 1,700 / 2,250", "M / L / F"], ["Calzone Pizza", "Rs. 1,300 / 1,700 / 2,250", "M / L / F"], ["Stuff Crust Pizza", "Rs. 1,300 / 1,700 / 2,350", "M / L / F"], ["Hot Box Special Pizza", "Rs. 1,500 / 1,950 / 2,550", "M / L / F"], ["Topping (Chicken / Cheese)", "Rs. 150 / 200 / 300", "M / L / F"]]) },
  { id: "burgers", label: "Burgers", items: rows([["Zinger Burger", "Rs. 400"], ["Zinger Tower", "Rs. 500"], ["Zinger Cheese Burger", "Rs. 450"], ["Crispy Patty Burger", "Rs. 300"], ["Grill Burger", "Rs. 550"], ["Pizza Burger", "Rs. 500"], ["Double Decker Burger", "Rs. 650"], ["BBQ Burger", "Rs. 400 / 700", "Regular / Large"], ["Beef Patty Burger", "Rs. 550"], ["Shami Burger", "Rs. 250"]]) },
  { id: "shawarma-paratha", label: "Shawarma & Paratha", items: rows([["Chicken Shawarma", "Rs. 200"], ["Chicken Cheese Shawarma", "Rs. 300"], ["Zinger Shawarma", "Rs. 350"], ["Zinger Paratha Roll", "Rs. 350"], ["Chicken Paratha Roll", "Rs. 250"], ["Arabic Shawarma", "Rs. 300"], ["Mughlai Roll", "Rs. 550"], ["Pizza Paratha", "Rs. 500"], ["Special Paratha Roll", "Rs. 500"]]) },
  { id: "steaks", label: "Steaks", items: rows([["American Steak", "Rs. 1,250 / 1,700", "Chicken / Beef"], ["Mushroom Steak", "Rs. 1,250 / 1,700", "Chicken / Beef"], ["Mexican Steak", "Rs. 1,250 / 1,700", "Chicken / Beef"], ["Hotbox Special Steak", "Rs. 1,450 / 1,800", "Chicken / Beef"]]) },
  { id: "chinese-italian", label: "Chinese / Italian", items: rows([["Egg Fried Rice", "Rs. 350"], ["Chicken Fried Rice", "Rs. 450"], ["Chicken Chowmein", "Rs. 500"], ["Alfredo Pasta", "Rs. 600"], ["Penne Pasta", "Rs. 600"], ["Macaroni Pasta", "Rs. 600"], ["Chicken Manchurian with Rice", "Rs. 700"], ["Chicken Chilli Dry with Rice", "Rs. 700"], ["Fish Chilli Dry with Rice", "Rs. 1,000"], ["Lemon Butter Fish", "Rs. 900"]]) },
  { id: "ice-cream", label: "Ice Cream", items: rows([["Mango, Strawberry, Vanilla, Pistachio, Caramel Crunch, Chocolate, King Kulfa", "Rs. 80 / 150 / 220", "1 scoop / 2 scoop / 3 scoop"]]) },
  { id: "fresh-drinks", label: "Fresh Drinks", items: rows([["Mint Margarita", "Rs. 220"], ["Fresh Lime Mart", "Rs. 200"]]) },
  { id: "ice-cream-shakes", label: "Ice Cream Shakes", items: rows([["Mango / Strawberry", "Rs. 350"], ["Vanilla / Oreo / Pista", "Rs. 350"], ["Chocolate / Dairy Milk", "Rs. 400"]]) },
];

export type Deal = { name: string; contents: string; price: number; group: string };
const deal = (name: string, contents: string, price: number, group: string): Deal => ({ name, contents, price, group });
export const deals: Deal[] = [
  deal("Deal-1", "1 Zinger Burger, Regular Fries, 1 Regular Drink", 600, "Standard Deals"), deal("Deal-2", "1 Crispy Patty Burger, 3 Wings, 1 Regular Drink", 500, "Standard Deals"), deal("Deal-3", "2 Zinger Burgers, Regular Fries, 0.5L Drink", 1000, "Standard Deals"), deal("Deal-4", "1 Zinger Burger, 1 Fried Chicken Pc, 0.5L Drink", 700, "Standard Deals"), deal("Deal-5", "1 Small Pizza (Regular), 1 Zinger Burger, 0.5L Drink", 1000, "Standard Deals"), deal("Deal-6", "1 Zinger Burger, Pizza Fries, 0.5L Drink", 850, "Standard Deals"), deal("Deal-7", "3 Zinger Burgers, 6 Crispy Wings, 1L Drink", 1550, "Standard Deals"), deal("Deal-8", "2 Zinger Burgers, 3 Drum Sticks, Reg. Fries, 1L Drink", 2000, "Standard Deals"),
  deal("Family Deal-1", "5 Zinger Burgers, Pizza Fries, 1.5L Drink", 2350, "Family Deals"), deal("Family Deal-2", "1 Medium Pizza, 2 Zinger Burgers, 1L Drink", 1850, "Family Deals"), deal("Family Deal-3", "1 Large Pizza, 4 Zinger Burgers, 1.5L Drink", 3100, "Family Deals"), deal("Family Deal-4", "1 Medium Pizza, 3 Zinger Burgers, 1L Fries, 1.5L Drink", 2600, "Family Deals"),
  deal("Student Deal-1", "1 Zinger Burger, 1 Leg Piece, 1 Regular Drink", 650, "Student Deals"), deal("Student Deal-2", "2 Zinger Burgers, 2 Leg Pieces, 2 Regular Drinks", 1280, "Student Deals"), deal("Student Deal-3", "1 Zinger Burger, 3 Wings, 1 Regular Drink", 600, "Student Deals"), deal("Student Deal-4", "2 Zinger Burgers, 6 Wings, 0.5L Drink", 1190, "Student Deals"),
  deal("Super Deal-1", "2 Zinger Burgers, 2 Shawarmas, 0.5L Drink", 1230, "Super Deals"), deal("Super Deal-2", "3 Zinger Burgers, 3 Shawarmas, 1L Drink", 1800, "Super Deals"), deal("Super Deal-3", "1 Small Pizza, 1 Shawarma, 1 Regular Drink", 800, "Super Deals"), deal("Super Deal-4", "1 Medium Pizza, 2 Shawarmas, 1L Drink", 1550, "Super Deals"),
  deal("Woow Deal-1", "1 Small Pizza, 1 Regular Drink", 630, "Woow Deals"), deal("Woow Deal-2", "2 Small Pizzas, 2 Regular Drinks", 1200, "Woow Deals"), deal("Woow Deal-3", "1 Medium Pizza, 0.5L Drink", 1150, "Woow Deals"),
  deal("Party Deal-1", "10 Zinger Burgers, 1 Jumbo Drink", 3850, "Party Deals"), deal("Party Deal-2", "6 Zinger Burgers, 18 Wings, 1 Jumbo Drink", 3300, "Party Deals"),
  deal("HotBox Pizza Deal-1", "3 Small Pizzas, 1L Drink", 1800, "Pizza Deals"), deal("HotBox Pizza Deal-2", "3 Medium Pizzas, 1.5L Drink", 3200, "Pizza Deals"), deal("HotBox Pizza Deal-3", "3 Large Pizzas, 1 Jumbo Drink", 4350, "Pizza Deals"),
  deal("Crazy Deal-1", "1 Small Pizza, 6 Wings, 500ml Drink", 1000, "Crazy Deals"), deal("Crazy Deal-2", "1 Medium Pizza, 12 Wings, 1L Drink", 1850, "Crazy Deals"),
];