const handleOnSelectChange = () => {
  const $categorySelect = document.getElementById(
    "blog-category"
  ) as HTMLSelectElement;

  $categorySelect?.addEventListener("change", (e: Event) => {
    const selectedCategory = (e.target as HTMLSelectElement).value;

    filterByCategory(selectedCategory);
  });
};

const filterByCategory = (category: string) => {
  const $blogCards = document.querySelectorAll(
    "#blog-cards"
  ) as NodeListOf<HTMLAnchorElement>;

  $blogCards.forEach((card) => {
    if (card.dataset.category !== category && category !== "all") {
      card.style.display = "none";
    } else {
      card.style.display = "block";
    }
  });
};

const handleOnSearch = () => {
  const $categorySearch = document.getElementById(
    "blog-search"
  ) as HTMLInputElement;

  $categorySearch.addEventListener("input", (e: Event) => {
    const searchArticle = e.target as HTMLInputElement;

    const $blogCards = document.querySelectorAll(
      "#blog-cards"
    ) as NodeListOf<HTMLAnchorElement>;

    $blogCards.forEach((card) => {
      if (
        card.dataset.title &&
        !card.dataset.title
          .toLowerCase()
          .includes(searchArticle.value.toLowerCase())
      ) {
        card.style.display = "none";
      } else {
        card.style.display = "block";
      }
    });
  });
};

export { handleOnSelectChange, handleOnSearch };
