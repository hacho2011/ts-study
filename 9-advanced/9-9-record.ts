{
  type PageInfo = {
    title: string;
  };

  type Page = "home" | "about" | "contact";

  //Page가 키 , PageInfo가 value
  const nav: Record<Page, PageInfo> = {
    home: { title: "Home" },
    about: { title: "About" },
    contact: { title: "Contact" },
  };
}
