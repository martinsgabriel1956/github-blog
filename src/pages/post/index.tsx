import { PostHeader } from "./components/post-header";
import { PostContainer, PostBody } from "./styles";
import Markdown from 'react-markdown'

export function Post() {
  return (
    <PostContainer>
      <PostHeader />
      <PostBody>
        <p><strong>Programming languages all have built-in data structures, but these often differ from one language to another</strong>. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.</p>

        <h3>Dynamic typing</h3>
        <p>JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
        </p>

        <pre>
          <code>
            let foo = 42;
            foo = "bar";
            foo = true;
          </code>
        </pre>

      </PostBody>
    </PostContainer>
  )
}