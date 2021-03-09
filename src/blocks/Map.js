import React from "react";
import "../css/map.scss"

class Mao extends React.Component {
    render() {
        return (
            <section className="map">
                <h2>Map</h2>
                <script
                    type="text/javascript"
                    charset="utf-8"
                    async
                    src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Affb5c2eaf731d3a79ff6cdbd4685bcf7bfb3ee4edb2f43609e16d03f4ff9dfd0&amp;width=100%25&amp;height=552&amp;lang=ru_RU&amp;scroll=true">

                </script>
            </section>
        )
    }
}



export default Mao;
