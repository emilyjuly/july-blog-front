import { Route, Routes } from "react-router-dom";
import UserHeader from "../../components/UserHeader/UserHeader";
import styles from "./User.module.css";
import Feed from "../Feed/Feed";
import UserPhotoPost from "../../components/UserPhotoPost/UserPhotoPost";
import UserStats from "../../components/UserStats/UserStats";
const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
