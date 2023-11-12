import { BodyMainText, Heading3 } from "../../globalStyles/textStyles";
import { Wrapper } from "./article-card.styles";

const ArticleCard = ({ title, url, description }) => {
  return (
    <Wrapper>
      <Heading3 style={{ color: "rgba(26, 33, 81, 0.8)" }}>{title}</Heading3>
      <BodyMainText style={{ color: "rgba(0, 0, 0, 0.8)" }}>
        {description}
      </BodyMainText>
      <a href={url} target="_blank" rel="noreferrer">
        Read More
      </a>
    </Wrapper>
  );
};

export default ArticleCard;
