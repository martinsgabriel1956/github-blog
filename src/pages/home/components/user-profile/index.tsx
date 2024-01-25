import { FaGithub, FaBuilding, FaUserGroup, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { UserProfileContainer, UserInfo, SocialLinks } from "./styles";

export function UserProfile() {
  return (
    <UserProfileContainer>
      <img src="/src/assets/example.svg" alt="" />

      <UserInfo>
        <h3>Cameron Williamson</h3>
        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

        <SocialLinks>
          <span>
            <FaGithub />
            cameronwll
          </span>
          <span>
            <FaBuilding />
            Rocketseat
          </span>
          <span>
            <FaUserGroup />
            32 seguidores
          </span>
        </SocialLinks>

      </UserInfo>
      <div>
        <a href="#">
          GITHUB
          <FaArrowUpRightFromSquare />
        </a>
      </div>
    </UserProfileContainer>
  )
}