<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="./static/images/logo.jpg">
    <title>主页</title>
    <style>
        :root {
            --purple: #410f70;
            --dk-purp: #220b4e;
            --pink: #dbc8ff;
            --pink2: #b691ff;
            --skyblue: #00BFFF;
            --blue: #2A52BE;
            --neon-blue: #4D4DFF;
            --white: #fff;
            --gray: #bbb;
            --black: #111;
        }

        body {
            overflow: hidden;
            font-family: 'Montserrat', sans-serif;
        }

        .wrapper {
            background-image: linear-gradient(to top right, #120230, #1a0345, #3e0673);
            height: 100vh;
            width: 100vw;
            outline: 30px solid var(--black);
            opacity: .99;
            filter: blur(20px);
            -webkit-filter: blur(18px);
            position: absolute;
        }

        .circle {
            margin: 10px;
            border-radius: 50%;
            position: absolute;
            z-index: -1;
        }

        .c1 {
            width: 12rem;
            height: 12rem;
            top: -15%;
            left: 30%;
            background-image: radial-gradient(circle at 70%, var(--neon-blue), var(--purple), hotpink, var(--black));
            box-shadow: 15px 0px 50px var(--pink2);
            animation: float1 12s infinite;
        }

        .c2 {
            width: 30rem;
            height: 30rem;
            right: -30%;
            bottom: 20%;
            background-image: radial-gradient(var(--dk-purp), var(--purple), var(--neon-blue), var(--skyblue));
            opacity: .7;
            animation: float2 15s infinite;
        }

        .c3 {
            width: 14rem;
            height: 12rem;
            bottom: -10%;
            left: -5%;
            background: hotpink;
            animation: float3 10s infinite;
        }

        .dashboard-wrapper {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
        }

        .dashboard {
            display: grid;
            border-radius: 10px;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            grid-auto-rows: minmax(100px, auto);
            padding: 15px;
            width: 100%;
            margin: 0;
            position: relative;
            scale: .85;
            transition: .2s;
        }

        .profile {
            display: none;
        }

        .schedule-table {
            grid-column: 2 / 3;
            grid-row: 1/4;
            min-width: 300px;
        }

        .exercise-table {
            grid-column: 3 / 4;
            grid-row: 1/3;
        }

        .calories {
            grid-column: 1;
            grid-row: 1/3;
        }

        .personal-bests {
            grid-column: 1;
            grid-row: 3;
        }

        .challenges {
            grid-column: 3;
            grid-row: 3;
        }

        .activity-feed {
            grid-column: 1/4;
            grid-row: 4;
        }

        h2 {
            margin-left: 15px;
        }

        .icon-container {
            display: inline-block;
            background-color: #000;
            color: #fff;
            width: 30px;
            height: 30px;
            margin-right: 10px;
            border-radius: 5px;
            text-align: center;
            padding: 5px;
        }

        .schedule-table,
        .exercise-table,
        .calories,
        .personal-bests,
        .challenges,
        .activity-feed {
            background-image: radial-gradient(rgba(0, 0, 0, 0) 25%, rgba(20, 20, 20, 0) 50%, rgba(100, 100, 100, .15) 80%, rgba(255, 255, 255, .1));
            border-top: solid 1px rgba(255, 255, 255, .2);
            border-left: solid 1px rgba(255, 255, 255, .2);
            border-radius: 10px;
            transition: .3s;
            color: #fff;
        }

        .schedule-table:hover,
        .exercise-table:hover,
        .calories:hover,
        .personal-bests:hover,
        .challenges:hover,
        .activity-feed:hover {
            cursor: pointer;
            transform: translate(0, -2%);
            color: #fff;
        }

        /* Schedule Table */
        .schedule-table table {
            width: 100%;
            height: 80%;
            margin: 0 auto;
            text-align: center;
            font-weight: 100;
            border-radius: 20px;
            position: relative;
            top: 45%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .schedule-table th {
            display: none;
        }

        .schedule-table td {
            color: #fff;
            font-weight: 700;

        }

        .schedule-table tr td:first-child {
            width: 100%;
            display: block;
            font-weight: 500;
            font-size: 1.4rem;
            color: var(--white);
            letter-spacing: .75px;
            padding: .5px;
        }

        .schedule-table tr td:nth-child(2),
        .schedule-table tr td:nth-child(3) {
            display: block;
            font-weight: 300;
        }

        .schedule-table tr td:nth-child(3) {
            display: block;
            margin-bottom: 15px;
        }

        .schedule-table tr:nth-child(2) td:nth-child(2),
        .schedule-table tr:nth-child(3) td:nth-child(2),
        .schedule-table tr:nth-child(4) td:nth-child(2),
        .schedule-table tr:nth-child(5) td:nth-child(2),
        .schedule-table tr:nth-child(6) td:nth-child(2) {
            letter-spacing: .5px;
        }

        .schedule-table tr:nth-child(2) td:nth-child(3),
        .schedule-table tr:nth-child(3) td:nth-child(3),
        .schedule-table tr:nth-child(4) td:nth-child(3),
        .schedule-table tr:nth-child(5) td:nth-child(3),
        .schedule-table tr:nth-child(6) td:nth-child(3) {
            font-weight: 300;
            border-bottom: 1px solid #555;
            margin-bottom: 25px;
        }

        .exercise-table tr:first-child th {
            text-align: left;
            padding-left: .5rem;
            font-weight: 700;
            font-size: 1.1rem;
        }

        .exercise-table tr:nth-child(2) td:first-child,
        .exercise-table tr:nth-child(3) td:first-child,
        .exercise-table tr:nth-child(4) td:first-child,
        .exercise-table tr:nth-child(5) td:first-child,
        .exercise-table tr:nth-child(6) td:first-child {
            padding-right: 1rem;
            height: 3rem;
            font-weight: 300;
            text-align: left;
            padding-left: 12px;
            vertical-align: middle;
        }

        .calories canvas {
            text-align: center;
        }

        .calories div:nth-child(4) {
            display: none;
        }

        .calories div:nth-child(5),
        .calories div:nth-child(6) {
            position: relative;
            margin: 0 0 10px 10px;
            font-weight: 300;
            color: #46cf46;
            font-size: 1.05rem;
        }

        .calories div:nth-child(5) strong,
        .calories div:nth-child(6) strong {
            color: #fff;
            font-weight: 300;
        }

        .personal-bests ul,
        .challenges ul,
        .activity-feed ul {
            list-style: none;
            line-height: 2;
            font-size: 1rem;
            font-weight: 300;
            color: #ddd;

        }

        .personal-bests ul li span {
            color: #46cf46
        }

        .challenges ul li:nth-child(2)::before {
            content: "✔️";
            text-align: center;
            color: transparent;
            text-shadow: 0 0 #46cf46;
            margin-right: 20px;
        }

        .challenges ul li:first-child::before,
        .challenges ul li:nth-child(3)::before {
            content: "✔️";
            color: transparent;
            text-shadow: 0 0 #888;
            text-align: center;
            margin-right: 20px;
        }



        .activity-feed ul li {
            display: flex;
            line-height: 70px;
            border-bottom: solid 1px #555
        }

        .activity-feed ul li img {
            border-radius: 50%;
            margin-right: 20px;
            margin-bottom: 10px;
            margin-top: 10px;
        }

        .activity-feed ul li:first-child img {
            background: #d2e7d6;
        }

        .activity-feed ul li:nth-child(2) img {
            background: #C3B1E1;
        }

        .activity-feed ul li:nth-child(3) img {
            background: #F8C8DC;
        }


        @keyframes float1 {
            0% {
                -webkit-transform: translateY(0px);
                -moz-transform: translateY(0px);
                -ms-transform: translateY(0px);
                -o-transform: translateY(0px);
                transform: translateY(0px);
            }

            50% {
                -webkit-transform: translateY(25px);
                -moz-transform: translateY(25px);
                -ms-transform: translateY(25px);
                -o-transform: translateY(25px);
                transform: translateY(25px);
                width: 24%;
                opacity: .7;
            }
        }

        @keyframes float2 {
            0% {
                -webkit-transform: translateY(0px);
                -moz-transform: translateY(0px);
                -ms-transform: translateY(0px);
                -o-transform: translateY(0px);
                transform: translateY(0px);
            }

            50% {
                -webkit-transform: translateY(70px);
                -moz-transform: translateY(70px);
                -ms-transform: translateY(70px);
                -o-transform: translateY(70px);
                transform: translateY(70px);
                height: 75%;
                width: 35%;
                opacity: .5;
            }
        }

        @keyframes float3 {
            0% {
                -webkit-transform: translateY(0px);
                -moz-transform: translateY(0px);
                -ms-transform: translateY(0px);
                -o-transform: translateY(0px);
                transform: translateY(0px);
            }

            50% {
                -webkit-transform: translateY(70px);
                -moz-transform: translateY(70px);
                -ms-transform: translateY(70px);
                -o-transform: translateY(70px);
                transform: translateY(70px);
            }
        }

        @media only screen and (max-width: 1250px) {
            .dashboard {
                scale: .46;
                width: 200%;
                left: -50%;
            }

            .schedule-table {
                grid-column: 2 / 3;
                grid-row: 1/4;
                min-width: 300px;
            }

            .exercise-table {
                grid-column: 3;
                grid-row: 1/3;
            }

            .calories {
                grid-column: 1;
                grid-row: 1/3;
            }

            .personal-bests {
                grid-column: 1;
                grid-row: 3;
            }

            .challenges {
                grid-column: 3;
                grid-row: 3;
            }

            .activity-feed {
                grid-column: 1/4;
                grid-row: 4;
            }

        }

        @media only screen and (max-width: 630px) {
            .dashboard {
                scale: .5;
                width: 50%;
                left: 0;
            }

            .schedule-table {
                grid-column: 1/2;
                grid-row: 1/3;
            }

            .exercise-table {
                grid-column: 2;
                grid-row: 2;
            }

            .calories {
                grid-column: 2;
                grid-row: 1;
            }

            .personal-bests {
                grid-column: 1;
                grid-row: 3;
            }

            .challenges {
                grid-column: 2;
                grid-row: 3;
            }

            .activity-feed {
                grid-column: 1/3;
                grid-row: 4;
            }
        }
    </style>
</head>

<body>
    <!-- <div>111</div> -->
    <!-- inspiration: https://dribbble.com/shots/22620506-Bento-Grid -->

    <header>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;700;900&display=swap"
            rel="stylesheet">
        <script src="https://kit.fontawesome.com/f2a04e8e0f.js" crossorigin="anonymous"></script>
    </header>
    <div class="wrapper">
        <div class="circle c1"></div>
        <div class="circle c2"></div>
        <div class="circle c3"></div>
    </div>

    <div class="dashboard-wrapper">
        <div class="dashboard">
            <div class="profile">
                <h2>Good Morning Champ!</h2>
                <p>Time to seize the day 🌞</p>

            </div>

            <div class="schedule-table">
                <h2>
                    <div class="icon-container"><i class="fa-solid fa-calendar"></i></div> Weekly Schedule
                </h2>
                <table>
                    <tr>
                        <th>Day</th>
                        <th>Scheduled Exercise</th>
                        <th>Time</th>
                    </tr>
                    <tr>
                        <td>Monday</td>
                        <td>Running</td>
                        <td>6:00 AM</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>Swimming</td>
                        <td>7:00 AM</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>Cycling</td>
                        <td>6:30 AM</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>Yoga</td>
                        <td>6:00 AM</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>Weight Training</td>
                        <td>8:00 AM</td>
                    </tr>
                </table>
            </div>

            <div class="exercise-table">
                <h2>
                    <div class="icon-container"><i class="fa-solid fa-dumbbell"></i></div> Last 5 Exercises
                </h2>
                <table>
                    <tr>
                        <th>Exercise</th>
                        <th>Duration</th>
                    </tr>
                    <tr>
                        <td>Running</td>
                        <td>30 min</td>
                    </tr>
                    <tr>
                        <td>Swimming</td>
                        <td>45 min</td>
                    </tr>
                    <tr>
                        <td>Cycling</td>
                        <td>60 min</td>
                    </tr>
                    <tr>
                        <td>Yoga</td>
                        <td>40 min</td>
                    </tr>
                    <tr>
                        <td>Weight Training</td>
                        <td>50 min</td>
                    </tr>
                </table>
            </div>

            <div class="calories">
                <h2>
                    <div class="icon-container"><i class="fa-solid fa-utensils"></i></div> Active Calories
                </h2>
                <canvas id="myChart" style="margin-bottom:10px;idth:100%;max-width:600px"></canvas>
                <div><strong>Today:</strong> 500</div>
                <div><strong>This Week:</strong> 3500</div>
                <div><strong>This Month:</strong> 14000</div>
            </div>

            <div class="personal-bests">
                <h2>
                    <div class="icon-container"><i class="fa-solid fa-medal"></i></div> Personal Bests
                </h2>
                <ul>
                    <li>Fastest 5K Run:<span> 22 min</span></li>
                    <li>Heaviest Deadlift: <span>250 lbs</span></li>
                    <li>Longest Plank: <span>3 min</spam>
                    </li>
                </ul>
            </div>

            <div class="challenges">
                <h2>
                    <div class="icon-container"><i class="fa-solid fa-bullseye"></i></div> Challenges
                </h2>
                <ul>
                    <li>30-Day Running Streak</li>
                    <li>1000 Pushups in a Month</li>
                    <li>Swim 20km in a Month</li>

                </ul>
            </div>

            <div class="activity-feed">
                <h2>
                    <div class="icon-container"><i class="fa-solid fa-users"></i></div> 朋友圈
                </h2>
                <ul>
                    <li><img src="https://mycyberuniverse.com/images/articles/Milena/how-save-memoji-as-png/thumbnail.png"
                            height=50px>Jane just set a new record in cycling: 30 miles!</li>
                    <li><img src="https://images.hola.com/us/images/0266-1197a831fb20-d4b3b80e6ea4-1000/square-800/apple-memoji.jpg"
                            height=50px>Mike completed the 30-Day Running Streak Challenge!</li>
                    <li><img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_421,h_421/https://rodrigovarejao.com/wp-content/uploads/2020/03/899d8da8f49455372d05e58bd8e6f932-sticker.png"
                            height=50px>Anna shared a new workout: 'Hill Sprints Interval'.</li>
                </ul>
            </div>

        </div>
    </div>
    <script>

        let val = (document.querySelector('.calories div:nth-child(3)').innerText);
        let val_split = val.split(' ');
        let val_num = parseInt(val_split[1], 10);

        var xValues = ["Today's Calories", "Remaining Calories"];
        var yValues = [val_num, 2000 - val_num];
        var barColors = [
            "#6366f1",
            "#4438ca",
        ];

        new Chart("myChart", {
            type: "pie",
            data: {
                labels: xValues,
                datasets: [{
                    backgroundColor: barColors,
                    data: yValues,
                    borderWidth: 0,
                },
                {
                    weight: 5
                }]
            },
            options: {
                plugins: {
                    legend: false
                }
            }
        });

        for (i = 2; i < 7; i++) {

            let val = document.querySelector(
                ".exercise-table tr:nth-child(" + i + ") td:nth-child(2)"
            );

            let length = val.innerText.substring(0, 2);

            val.innerHTML = '<div style="background-image:linear-gradient(to right,#410f70,#4D4DFF);color:#fff;width:' + (length / 2) + 'vw;font-weight:700; text-align:center;user-select: none;margin-right:20px;">' + length + ' min</div>';
        }
    </script>
</body>

</html>