import react from "react";
import { Helmet } from "react-helmet";

class Head extends react.Component {
    render() {
      return (
        <Helmet>
            {/*HTML Meta Tags */}
            <title>Kenneth Jiang | Fueled By Passion</title>
            <meta name="description" content="The only impossible journey is the one you never begin. #onwardandupward #staycurious" />
            {/*Facebook Meta Tags */}
            <meta property="og:url" content="https://kdjiang390.github.io/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Kenneth Jiang | Fueled by Passion" />
            <meta property="og:description" content="The only impossible journey is the one you never begin. #onwardandupward #staycurious" />
            <meta property="og:image" content="https://kdjiang390.github.io/Assets/og_image.png" />
            {/*Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="kdjiang390.github.io" />
            <meta property="twitter:url" content="https://kdjiang390.github.io/" />
            <meta name="twitter:title" content="Kenneth Jiang | Fueled by Passion" />
            <meta name="twitter:description" content="The only impossible journey is the one you never begin. #onwardandupward #staycurious" />
            <meta name="twitter:image" content="https://kdjiang390.github.io/Assets/og_image.png" />
            {/*Other head stuff */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charset="utf-8" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Bad+Script&family=Caveat:wght@600&family=Lexend+Deca:wght@600&family=Libre+Baskerville:wght@700&family=Manrope:wght@200;700&display=swap" rel="stylesheet" />
        </Helmet>
      );
    }
    }

    export default Head;