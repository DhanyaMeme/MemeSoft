import { FC } from "react";
import "./Style.scss";

interface IProps {
  url: string;
  title: string;
  subTitle: string[];
}

export const SplitBanner: FC<IProps> = (props: IProps) => {
  const { url, title, subTitle } = props;

  return (
    <section className="HomeHero" data-aos="zoom-in-up">
      <div className="HomeHero__Image">
        <img
          className="image"
          sizes="100vw"
          src="https://2510.org/static/media/demobak.d9bf89a1da5d19b68711.jpg"
          alt={title}
        />
      </div>
    </section>
  );
};
