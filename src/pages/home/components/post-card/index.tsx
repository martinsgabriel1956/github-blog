import { PostCardContainer, TitleContainer } from "./style";

export function PostCard() {
  return (
    <PostCardContainer
      to={`/post/1`}
    >
      <TitleContainer>
        <h3>JavaScript data types and data structures</h3>
        <span>Há 1 dia</span>
      </TitleContainer>

      <p>
        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
      </p>
    </PostCardContainer>
  )
}