import { PostCard } from "./components/post-card";
import { SearchForm } from "./components/search-form";
import { UserProfile } from "./components/user-profile";
import { HomeContainer, PostsContainer, PublicationsContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <UserProfile />

      <div className="">
        <PublicationsContainer>
          <span>Publicações</span>
          <span>6 publicações</span>
        </PublicationsContainer>

        <SearchForm />

        <PostsContainer>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </PostsContainer>
      </div>
    </HomeContainer>
  )
}