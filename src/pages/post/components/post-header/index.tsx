import { FaGithub, FaCalendarDay, FaComments, FaArrowUpRightFromSquare, FaChevronLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { PostHeaderContainer, PostInfo, SocialLinks, Header } from "./styles";

export function PostHeader() {
  return (
    <PostHeaderContainer>
      <Header>
        <Link to="/">
          <FaChevronLeft />
          Voltar
        </Link>
        <a href="#">
          Ver no Github
          <FaArrowUpRightFromSquare />
        </a>
      </Header>

      <PostInfo>
        <h3>JavaScript data types and data structures</h3>

        <SocialLinks>
          <span>
            <FaGithub />
            cameronwll
          </span>
          <span>
            <FaCalendarDay />
            Há 1 dia
          </span>
          <span>
            <FaComments />
            5 comentários
          </span>
        </SocialLinks>

      </PostInfo>
      <div>

      </div>
    </PostHeaderContainer>
  )
}