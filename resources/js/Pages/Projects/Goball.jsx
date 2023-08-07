import React, { useEffect, useState } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { BiSolidBomb } from "react-icons/bi";

function Goball() {
    const rounds = [
        { id: 1, playable: true },
        { id: 2, playable: false },
        { id: 3, playable: false },
        { id: 4, playable: false },
        { id: 5, playable: false },
        { id: 6, playable: false },
        { id: 7, playable: false },
        { id: 8, playable: false },
    ];
    const [playRounds, setPlayRounds] = useState(rounds);
    const [currentRound, setCurrentRound] = useState(0);
    const [gameOn, setGameOn] = useState(true);

    function handleSelect(selected) {
        console.log(currentRound);
        setCurrentRound(selected.id);
        if (!selected.outcome) {
            setGameOn(false);

            alert("Game Over");
        }
        // setPlayRounds((prs) => {
        //     const nextRound = playRounds.findIndex(
        //         (r) => r.id == selected.id + 1
        //     );
        //     console.log([
        //         ...prs.slice(0, nextRound),
        //         { ...prs[nextRound], playable: true },
        //         ...prs.slice(0, nextRound + 1),
        //     ]);
        //     return prs;
        // });
    }

    return (
        <div className="h-screen bg-gradient-to-b from-purple-600 to-purple-700 flex items-center">
            <div className="h-[60vh] bg-white w-2/3 mx-auto rounded p-8 grid grid-cols-8 gap-8">
                {playRounds.map((round, i) => (
                    <OptionBoxes
                        options={5}
                        selected={handleSelect}
                        round={round}
                        playable={gameOn && currentRound == i}
                    />
                ))}
            </div>
        </div>
    );
}

function OptionBoxes({ options, selected, round, playable }) {
    const [rows, setRows] = useState([]);
    const [reveal, setReveal] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    useEffect(() => {
        const boxes = [];
        const invalidIndex = Math.floor(Math.random() * options) + 1;
        for (let i = 1; i <= options; i++) {
            const label = i === invalidIndex ? "invalid" : "valid";
            boxes.push(label);
        }
        setRows(boxes);
    }, []);

    function selectBox(i) {
        if (playable) {
            setSelectedIndex(i);
            setReveal(true);
            selected({ ...round, outcome: rows[i] != "invalid" });
        } else {
            console.log("gameOver");
        }
    }
    return (
        <div className="flex flex-col justify-between h-full">
            {rows.map((row, i) => (
                <>
                    {reveal ? (
                        <>
                            <div className="border border-gray-300 text-2xl rounded-2xl w-12 h-12 grid place-content-center">
                                {row == "invalid" ? (
                                    <span className="text-red-50s0">
                                        <BiSolidBomb />
                                    </span>
                                ) : (
                                    <>
                                        {selectedIndex == i && (
                                            <span className="text-green-500">
                                                <AiFillCheckCircle />
                                            </span>
                                        )}
                                    </>
                                )}
                            </div>
                        </>
                    ) : (
                        <div
                            className="border border-blue-300 w-12 h-12 cursor-pointer bg-blue-200 rounded-2xl hover:bg-blue-600 transition-all  ease-in"
                            onClick={() => selectBox(i)}
                        >
                            {row == "invalid" && "."}
                        </div>
                    )}
                </>
            ))}
        </div>
    );
}

export default Goball;
