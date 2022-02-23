[33mcommit 925908516d7b0ff282f532312a9d4c5e0b9f9500[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m, [m[1;31morigin/master[m[33m)[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Mon Feb 14 11:40:46 2022 -0700

    prepended the word api to user router. Router in acordance with nginx default specifications

[33mcommit 8731d3cb669f8dcc8f4de383b01b9f095752cd8b[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Sun Feb 13 23:42:59 2022 -0700

    changed facebooklogin appId to 136. setting up live log-in buttons

[33mcommit 098ee79859dda313dca643bd5f1d725d6c6e786e[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Sun Feb 13 22:45:23 2022 -0700

    Changed baseUrl to https using ssl certified domain. Changed nginx settings to redirect trafic to https

[33mcommit 9168313bded9b2cba871c351391a87ac67008130[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Fri Feb 11 11:31:19 2022 -0700

    changed baseUrl back to https

[33mcommit bb5f454095b8dbd8fd1a54256be646b297c34c57[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Fri Feb 11 11:04:25 2022 -0700

    prod build, changed url back to http for testinb

[33mcommit 654fa01b1ca75b76bbf42546ac61ee444bfe4fa7[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Fri Feb 11 11:00:59 2022 -0700

    changin baseURL back to test

[33mcommit 41ef74b673751eff29b1a95bc6f029b740e729d9[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Fri Feb 11 10:42:15 2022 -0700

    a

[33mcommit 995ff18689cebf07df8a6c604b5dd731070ec909[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Fri Feb 11 10:40:50 2022 -0700

    changed baseUrl file to https

[33mcommit 4d0d02c6b1d8ad960a0ebb04b4606c7edcbe606e[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Thu Feb 10 09:14:14 2022 -0700

    changed nginx config file, attempt to fix routes

[33mcommit d6903700a593140fc465f09362b859c520b15e0e[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Mon Feb 7 22:40:17 2022 -0700

    configured ssl .key and .pem files for the domain name: acend.site

[33mcommit c3323ad6eadd7673cf428c19b82e813e76816de2[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Mon Feb 7 17:06:29 2022 -0700

    Build after port # was removed from baseUrl

[33mcommit 20f1876b564dc574bc75317f4308fc0bedc298ff[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Mon Feb 7 17:02:24 2022 -0700

    removed port # from baseUrl

[33mcommit 452493bcaa62bea97398816b8f3abc8f76d2f2bd[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Mon Feb 7 16:03:52 2022 -0700

    changed baseURL again

[33mcommit 982b9d5338ec1df5dc9e9e415315b707496f9c1b[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Mon Feb 7 15:50:38 2022 -0700

    updated build files

[33mcommit fd421db17ba60fe45d7ddb0401ccff308d669a4b[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Mon Feb 7 15:10:19 2022 -0700

    changed baseURL in config for AWS deployment

[33mcommit c234859a88018e71833d4d97a93ec3eed14884a0[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Mon Feb 7 11:48:00 2022 -0700

    modified build folder

[33mcommit 1fead5004768791e05be4b5a89f01642c7a2b7e5[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Mon Feb 7 09:43:04 2022 -0700

    update cert and key

[33mcommit d42d753758db5004228898895d2a9a2a4dac771a[m
Author: Esteban Garcia <74727478+estgarci@users.noreply.github.com>
Date:   Sun Feb 6 09:54:17 2022 -0700

    Update README.md

[33mcommit 5b8aeda9285e007f5def3a6527ec8a60cd45813e[m
Author: Esteban Garcia <74727478+estgarci@users.noreply.github.com>
Date:   Sun Feb 6 09:53:31 2022 -0700

    Create README.md

[33mcommit fb74aad53f031d07a0e2fa3e57c7392da53fe8bd[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Thu Jan 6 10:26:54 2022 -0700

    Implemented Github OAuth2.0

[33mcommit ad575a06792c529a47b5417234ae3ab443663de7[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Wed Jan 5 12:13:56 2022 -0700

    Revert "Implemented Facebook OAuth and Changed Navbar styles"
    
    This reverts commit fc0819a69d404dcc0cb4e1d4a5ce39a54ffb61bb.

[33mcommit 8c0917e0f39fd2bb05ae06b4960b231680f809b8[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Wed Jan 5 11:32:21 2022 -0700

    Implemented github OAuth2.0 passport strategy

[33mcommit fc0819a69d404dcc0cb4e1d4a5ce39a54ffb61bb[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Thu Dec 30 10:26:00 2021 -0700

    Implemented Facebook OAuth and Changed Navbar styles

[33mcommit 9a64988df89bf05cc5d55ff64134e6723363668b[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Wed Dec 29 09:33:22 2021 -0700

    Facebook login, login and signup buttons

[33mcommit 015d822997e2e3bcc4cdd54d0ac4ba4345f373cb[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Fri Dec 24 12:16:16 2021 -0700

    Endpoints with authorization

[33mcommit e2d737eb5b7bd4485ba310ca7e0e3ac769c3d74c[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Mon Dec 20 08:29:14 2021 -0700

    Completed Project for submission

[33mcommit cde431d40f1954d0cd7b7178f79abe3fe88e47fd[m
Merge: 771656a 64d2180
Author: esteban garcia <egarci@fastmail.com>
Date:   Sun Dec 19 15:04:43 2021 -0700

    Merge branch 'master' of github.com:estgarci/acend-aws

[33mcommit 771656a38b59c4f50e09654dc12d56b3adbbcb90[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Sun Dec 19 15:04:21 2021 -0700

    one

[33mcommit 64d2180f5dfabbee9d9d4e2ae75ad85d81076fb7[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Sat Dec 18 10:21:59 2021 -0700

    Secured API keys

[33mcommit 3cb2a9186d08e999865043a5ae660e559c4b1e92[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Sat Dec 18 01:03:13 2021 -0700

    Acend 1.1

[33mcommit 3df2e723791826041c9e1e3721fbe7742fd75b19[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Thu Dec 16 12:09:17 2021 -0700

    delete comments

[33mcommit 0eab7c3a8e0def454ea2d5b7206d09814f85cff7[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Thu Dec 16 12:06:29 2021 -0700

    Acend 1.0, project 90% complete

[33mcommit 9bbd7310e27ae0b86ff8cfe94e6ed2b2e6cfcfc2[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Tue Dec 14 10:52:37 2021 -0700

    flightaware flights api

[33mcommit 27bbc9e935a0760753ff2362ce92a7ca05437e35[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Mon Dec 13 13:50:02 2021 -0700

    fixed redux, no public api call

[33mcommit cbb0a81bbad5a9b92f18712c80bcb125db0e55d4[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Mon Dec 13 12:11:09 2021 -0700

    redux fixed issues with action creators

[33mcommit e40eb40cd6d36247982fc240fe770f62bc41c156[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Sun Dec 12 10:33:37 2021 -0700

    Redux, re api, api calls

[33mcommit e7063cf01dc44106cd2dc7ad119d839afcd007e0[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Sat Dec 11 08:19:38 2021 -0700

    revert

[33mcommit af554e9adc9c9d25062601a8cf9c505bfab9cafd[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Sat Dec 11 08:13:23 2021 -0700

    removed danger files

[33mcommit ccf36f0c1a80dffe67c7d04e64f032f3a5025dc8[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Sat Dec 11 08:01:53 2021 -0700

    cors server configfig

[33mcommit aad341c0e350c1f0c3d9829656366368e880790c[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Fri Dec 10 05:41:34 2021 -0700

    aws init setup

[33mcommit 9cd58bcb4c15aa113c6a6f46261566d9fe97b70e[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Thu Dec 9 10:41:46 2021 -0700

    build project

[33mcommit 11d676adb192d3543f37f1b7853ddd0200f69e8b[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Thu Dec 9 10:34:03 2021 -0700

    mongoose set-up

[33mcommit a75c09b967532c7b919f0b0949798416db4732a5[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Wed Dec 8 21:58:28 2021 -0700

    server set-up

[33mcommit a37911acb9ff18185a6adf4644acf4942b0fe4be[m
Author: esteban garcia <egarci@fastmail.com>
Date:   Wed Dec 8 21:04:30 2021 -0700

    Initial Commit
