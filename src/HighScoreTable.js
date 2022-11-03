import { useState } from "react";
import allCountryScores from "./scores";


let HighScoreTable = () => {
    const [sortedAscending, setSortedAscending] = useState(true);
    let toggleSort = e => { setSortedAscending(!sortedAscending) }
    return (
        <>
            <button className='btn' onClick={toggleSort}>Toggle Asc/Desc Sort</button>
            <div className="container">
                <h3>High scores per country:</h3>
                {
                    allCountryScores
                        .sort((a, b) => (a.name > b.name) ? 1 : -1)
                        .map(({ name, scores }, key) => {
                            return (
                                <table key={key} className="inside-table" >
                                    <thead className="head">
                                        <tr >
                                            <th key={key}>{name.toUpperCase()}</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {allCountryScores.map((countryScores, key) => {
                                            countryScores.scores.sort((score1, score2) => {
                                                if (sortedAscending) {
                                                    return parseInt(score1.s) - parseInt(score2.s)
                                                }
                                                else {
                                                    return parseInt(score2.s) - parseInt(score1.s)
                                                }
                                            })
                                        })
                                        }



                                        {
                                            scores.map(({ n, s }, key) => {
                                                return (
                                                    <tr className="wrap" key={key}>
                                                        <td className="player-name">{n.toUpperCase()}</td>
                                                        <td className="player-score">{s}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            )
                        })
                }
            </div>
        </>
    )
};


export default HighScoreTable
