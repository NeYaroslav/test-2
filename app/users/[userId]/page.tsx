import { Metadata } from "next";
import React from "react";

interface Props {
  params: { userId: string };
}

export const generateMetadata = ({ params: { userId } }: Props): Metadata => {
  const title = `user no ${userId}`;

  return {
    title,
  };
};

const UserPage = (props: Props) => {
  // console.log(props);

  return <div>UserPage {props.params.userId}</div>;
};

export const generateStaticParams = () => {
  return [...Array(10).keys()].map((item) => String(item));
};
export default UserPage;
