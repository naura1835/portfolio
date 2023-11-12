import ArticleCard from "../article-card/article-card.component";

import { Display } from "../../globalStyles/textStyles";
import { ArticleList, ReadMoreBtn, Wrapper } from "./articles.styles";

const ARTICLE_DATA = [
  {
    title: "Binding Input Value Using Svelte",
    description:
      "Binding typically updates the value of a variable in an input element as well as the value of the input. Learn how to bind input elements",
    url: "https://naura.hashnode.dev/binding-input-value-using-svelte",
  },
  {
    title: "Svelte: Embracing the Elegance of a Better Framework",
    description:
      "Svelte has been gaining a lot of buzz recently and for the right reason. Let's dive into the framework that is svelte, hopefully you become a fan too",
    url: "https://naura.hashnode.dev/svelte-embracing-the-elegance-of-a-better-framework",
  },
  {
    title: "Multiple backgrounds using CSS",
    description:
      "Learn how to add multiple background in css, be it images or colors",
    url: "https://naura.hashnode.dev/multiple-backgrounds-using-css",
  },
];

const Articles = () => {
  return (
    <Wrapper aria-labelledby="article-heading">
      <Display id="article-heading" style={{ color: "rgba(26, 33, 81, 0.70)" }}>
        Article
      </Display>
      <ArticleList>
        {ARTICLE_DATA.map(({ title, description, url }, id) => (
          <ArticleCard
            key={id}
            title={title}
            description={description}
            url={url}
          />
        ))}
      </ArticleList>
      <ReadMoreBtn href="https://naura.hashnode.dev/">Go to blog</ReadMoreBtn>
    </Wrapper>
  );
};

export default Articles;
