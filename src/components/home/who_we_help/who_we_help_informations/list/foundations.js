import React, {Component} from 'react';

import '../_list.scss';

class WhoWeHelpInformationsFoundations extends Component
{
    state = {
        mainInfo: "W naszej bazie znajdziesz listę zweryfikowanych Funcadji, z którymi współpracujemy. " +
            "Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
        info: [
            ["Fundacja “Dbam o zdrowie”", "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.", "ubrania, jedzenie, sprzęt AGD, meble, zabawki"],
            ["Fundacja “Dla dzieci”", "Cel i misja: Pomoc dzieciom z ubogich rodzin.", "ubrania, meble, zabawki"],
            ["Fundacja “Bez domu”", "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.", "ubrania, jedzenie, ciepłe koce"],
            ["Fundacja “Lorem Ipsum 4”", "Quis varius quam quisque id diam vel quam elementum pulvinar.", "Egestas, sed, tempus"],
            ["Fundacja “Lorem Ipsum 5”", "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.", "Ut, aliquam, purus, sit, amet"],
            ["Fundacja “Lorem Ipsum 6”", "Scelerisque in dictum non consectetur a erat nam.", "Ut, aliquam, purus, sit, amet"],
            ["Fundacja “Lorem Ipsum 7”", "Quis varius quam quisque id diam vel quam elementum pulvinar.", "Egestas, sed, tempus"],
            ["Fundacja “Lorem Ipsum 8”", "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.", "Ut, aliquam, purus, sit, amet"],
            ["Fundacja “Lorem Ipsum 9”", "Scelerisque in dictum non consectetur a erat nam.", "Ut, aliquam, purus, sit, amet"],
        ],
        currentPage: 1,
        infoPerPage: 3

    };

    handleClick = (e, i) =>
    {
        this.setState({
            currentPage: i
        })
    };

    render() {
        const {info, currentPage, infoPerPage, mainInfo} = this.state;

        const indexOfLast = currentPage * infoPerPage;
        const indexOfFirst = indexOfLast - infoPerPage;
        const currentInfo = info.slice(indexOfFirst, indexOfLast);

        const informations = currentInfo.map((element, i) =>
        {
            return (
                <li key={"foundations-" + i}>
                    <div className="list-text-main">
                        <h3>{element[0]}</h3>
                        <p>{element[1]}</p>
                    </div>
                    <div className="list-text-side">
                        <p>{element[2]}</p>
                    </div>
                </li>)
        });

        const pageNumbers = [];
        const numerOfPages = Math.ceil(info.length/infoPerPage);

        for (let i = 1; i <= numerOfPages ; i++)
        {
            const pageNumberElement =
                <li key={"foundations-pages" + i}
                    onClick={e => this.handleClick(e, i)}>
                        {i}
                </li>;
            pageNumbers.push(pageNumberElement);
        }

        return (
            <>
                <div className="who-we-help-informations-list">
                    <div className="list-main-info">
                        <p>
                            {mainInfo}
                        </p>
                    </div>
                    <div className="list-text">
                        <ul className="list-text-info">
                            {informations}
                        </ul>
                        <ul className="list-text-pages">
                            {numerOfPages !== 1 && <>{pageNumbers}</>}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default WhoWeHelpInformationsFoundations;