import { IItemsMenu } from "@/core/interfaces/menu.interface";

export const MenuService = () => {
  const items: IItemsMenu[] = [
    {
      title: "Salud Mental",
      link: { name: "" },
    },
  ];

  return items;
};
