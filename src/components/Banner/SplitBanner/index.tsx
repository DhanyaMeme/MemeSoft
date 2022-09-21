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
      <div className="Grid">
        <div className="Grid__Cell 1/2--desk">
          <div className="HomeHero__Content">
            <div>
              <h1 className="Heading Text--highlight">{title}</h1>
              {subTitle.map((item: string, index: number) => (
                <p className="Text--subdued u-h3" key={index}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="HomeHero__Image">
        <img
          className="image"
          sizes="100vw"
          src={url}
          alt="India product imagery with mobile view"
        />
      </div>
    </section>
  );
};
