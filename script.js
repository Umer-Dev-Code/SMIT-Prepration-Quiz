const QUIZ_DATA = [
    {
        topic: 'Islamiyat',
        id: 'islamiyat',
        questions: [
            { id: 'is1', q: 'Quran mein kul kitni Ayaat hain?', options: ['6236', '6666', '6000', '6200'], answer: 1 },
            { id: 'is2', q: 'Surah Baqarah mein kul kitni Ayaat hain?', options: ['286', '285', '290', '280'], answer: 0 },
            { id: 'is3', q: 'Hazrat Umar (R.A) ki shahadat kis saal hui?', options: ['23 AH', '24 AH', '22 AH', '25 AH'], answer: 0 },
            { id: 'is4', q: 'Sab se pehli wahi kis ghari mein nazil hui?', options: ['17 Ramzan', '12 Rabi-ul-Awwal', '27 Rajab', '10 Muharram'], answer: 0 },
            { id: 'is5', q: 'Quran ki sabse lambi ayat konsa hai?', options: ['Ayat-e-Dayn (2:282)', 'Ayat-ul-Kursi (2:255)', 'Ayat Noor (24:35)', 'Ayat Saif (9:5)'], answer: 0 },
            { id: 'is6', q: 'Hazrat Usman (R.A) ne Quran ki kitni nuskhe jama kiye?', options: ['7', '6', '5', '4'], answer: 3 },
            { id: 'is7', q: 'Hudaybiyyah ka muahida kitne saal ke liye tha?', options: ['5', '10', '15', '20'], answer: 1 },
            { id: 'is8', q: 'Surah Tawbah kaun si surah hai jo Bismillah se shuru nahi hoti?', options: ['9th', '10th', '11th', '12th'], answer: 0 },
            { id: 'is9', q: 'Kis Nabi ko 950 saal tak qaum mein dawat dene ka zikr hai?', options: ['Hazrat Nuh (A.S)', 'Hazrat Musa (A.S)', 'Hazrat Ibrahim (A.S)', 'Hazrat Isa (A.S)'], answer: 0 },
            { id: 'is10', q: 'Badr ki jang mein kitne kafir mare gaye?', options: ['70', '75', '80', '90'], answer: 0 },
            { id: 'is11', q: 'Hijrat-e-Madina ke waqt Nabi (S.A.W) ke sath kaun tha?', options: ['Hazrat Umar (R.A)', 'Hazrat Abu Bakr (R.A)', 'Hazrat Ali (R.A)', 'Hazrat Hamza (R.A)'], answer: 1 },
            { id: 'is12', q: 'Surah Fatiha ko aur kis naam se jana jata hai?', options: ['Umm-ul-Kitab', 'Al-Noor', 'Al-Majid', 'Al-Furqan'], answer: 0 },
            { id: 'is13', q: 'Quran mein sabse ziada baar kis Nabi ka zikr hai?', options: ['Musa (A.S)', 'Ibrahim (A.S)', 'Isa (A.S)', 'Yusuf (A.S)'], answer: 0 },
            { id: 'is14', q: 'Kitni suratein Madni hain?', options: ['28', '29', '30', '31'], answer: 1 },
            { id: 'is15', q: 'Hazrat Khadija (R.A) ki wafat kis saal hui?', options: ['10 Nabvi', '11 Nabvi', '9 Nabvi', '8 Nabvi'], answer: 0 },
            { id: 'is16', q: 'Ghazwa-e-Khandaq kis hijri saal hua?', options: ['5 AH', '6 AH', '7 AH', '8 AH'], answer: 0 },
            { id: 'is17', q: 'Surah Ikhlas kaunsi number ki Surah hai?', options: ['112', '111', '110', '113'], answer: 0 },
            { id: 'is18', q: 'Hazrat Umar (R.A) ke dor mein kon sa mulk fatah hua?', options: ['Iran', 'Spain', 'Turkey', 'India'], answer: 0 },
            { id: 'is19', q: 'Surah Alaq ka pehla lafz kya hai?', options: ['Iqra', 'Bismillah', 'Alhamdu', 'Subhan'], answer: 0 },
            { id: 'is20', q: 'Hazrat Ali (R.A) ki shahadat kis masjid mein hui?', options: ['Kufa', 'Madina', 'Basra', 'Baghdad'], answer: 0 },
            { id: 'is21', q: 'Quran mein kitne Sajda hain?', options: ['14', '15', '13', '16'], answer: 0 },
            { id: 'is22', q: 'Hazrat Abu Bakr (R.A) ki Wilayat ka daur kitne saal raha?', options: ['2', '2.5', '3', '4'], answer: 1 },
            { id: 'is23', q: 'Surah Noor mein kis cheez ka zikr hai?', options: ['Hijab', 'Zakat', 'Namaz', 'Roza'], answer: 0 },
            { id: 'is24', q: 'Quran ka akhri paigham konsa hai?', options: ['Aaj maine tumhara deen mukammal kar diya', 'Namaz qayam karo', 'Allah ke ilawa koi maabood nahi', 'Roza rakho'], answer: 0 },
            { id: 'is25', q: 'Surah Yaseen ko Quran ka kya kaha jata hai?', options: ['Dil', 'Zuban', 'Rooh', 'Jism'], answer: 0 }
        ]
    },
    {
        topic: 'Mathematics',
        id: 'math',
        questions: [
            { id: 'm1', q: 'If log₂(8x) = 9, find x.', options: ['170', '171', '172', '173'], answer: 2 },
            { id: 'm2', q: 'Evaluate: limit as x→0 of (sin(5x)/x).', options: ['5', '1', '0', '∞'], answer: 0 },
            { id: 'm3', q: 'Solve for x: 2x² - 7x + 3 = 0.', options: ['x=1,3/2', 'x=3,1/2', 'x=1,7/2', 'x=3,7/2'], answer: 0 },
            { id: 'm4', q: 'The determinant of [[2,3],[1,4]] is:', options: ['5', '2', '6', '7'], answer: 2 },
            { id: 'm5', q: 'Derivative of e^(2x) is:', options: ['2e^(2x)', 'e^(2x)', 'x e^(2x)', 'None'], answer: 0 },
            { id: 'm6', q: 'If f(x)=x³, then f\'\'(2)=?', options: ['6', '12', '8', '4'], answer: 1 },
            { id: 'm7', q: 'Evaluate integral ∫0¹ (3x²) dx.', options: ['1', '3', '2', '1/3'], answer: 0 },
            { id: 'm8', q: 'If A = [[1,2],[3,4]], find trace(A).', options: ['5', '6', '4', '7'], answer: 0 },
            { id: 'm9', q: 'Probability of getting sum 7 on dice roll (two dice)?', options: ['1/6', '1/9', '1/12', '1/36'], answer: 0 },
            { id: 'm10', q: 'Simplify: (x^4)^3.', options: ['x^12', 'x^7', 'x^1', 'x^9'], answer: 0 },
            { id: 'm11', q: 'Solve for n: 2^n=64.', options: ['6', '5', '7', '4'], answer: 0 },
            { id: 'm12', q: 'Matrix inverse of [[1,2],[3,4]] determinant is?', options: ['-2', '-1', '2', '1'], answer: 0 },
            { id: 'm13', q: 'Rank of zero matrix of order 3?', options: ['0', '1', '2', '3'], answer: 0 },
            { id: 'm14', q: 'If tanθ = 3/4, find sinθ.', options: ['3/5', '4/5', '5/3', '5/4'], answer: 0 },
            { id: 'm15', q: 'Find eigenvalues of [[2,0],[0,3]].', options: ['2,3', '1,5', '0,3', '2,2'], answer: 0 },
            { id: 'm16', q: 'Expand: (x+y)^4.', options: ['x^4+4x³y+6x²y²+4xy³+y^4', 'x^4+y^4', 'x^4+2x²y²+y^4', 'None'], answer: 0 },
            { id: 'm17', q: 'Slope of tangent to y=x² at x=3 is:', options: ['6', '3', '9', '12'], answer: 0 },
            { id: 'm18', q: 'Area under y=x between x=0 to x=2.', options: ['2', '3', '4', '1'], answer: 2 },
            { id: 'm19', q: 'If P(A)=0.5, P(B)=0.4, P(A∩B)=0.2, find P(A∪B).', options: ['0.7', '0.9', '0.8', '0.6'], answer: 0 },
            { id: 'm20', q: 'nth term of AP: 5,8,11,...', options: ['3n+2', '3n+5', '5n+3', '2n+5'], answer: 0 },
            { id: 'm21', q: 'If log₁₀(2)=0.301, log₁₀(3)=0.477, find log₁₀(6).', options: ['0.778', '0.770', '0.781', '0.779'], answer: 0 },
            { id: 'm22', q: 'General solution of sinx=0?', options: ['x=nπ', 'x=2nπ', 'x=π/2+nπ', 'x=n'], answer: 0 },
            { id: 'm23', q: 'Find derivative of ln(x²+1).', options: ['2x/(x²+1)', '1/(x²+1)', 'x/(x²+1)', '2/(x²+1)'], answer: 0 },
            { id: 'm24', q: 'Limit of (1+1/n)^n as n→∞.', options: ['e', '1', '0', '∞'], answer: 0 },
            { id: 'm25', q: 'Solve: ∫ e^x cos(x) dx.', options: ['(e^x/2)(sinx+cosx)+C', 'e^x cosx +C', 'e^x sinx +C', 'None'], answer: 0 }
        ]
    },
    {
        topic: 'Computer Science',
        id: 'cs',
        questions: [
            { id: 'cs1', q: 'Time complexity of binary search on a sorted array?', options: ['O(n)', 'O(log n)', 'O(1)', 'O(n log n)'], answer: 1 },
            { id: 'cs2', q: 'Which scheduling algorithm minimizes average waiting time (non-preemptive)?', options: ['FCFS', 'Round Robin', 'SJF', 'Priority (non-preemptive)'], answer: 2 },
            { id: 'cs3', q: 'Which of the following is NOT a necessary condition for deadlock?', options: ['Mutual Exclusion', 'Hold and Wait', 'No Preemption', 'Re-entrancy'], answer: 3 },
            { id: 'cs4', q: 'TCP connection establishment uses:', options: ['Two-way handshake', 'Three-way handshake', 'Four-way handshake', 'Sliding handshake'], answer: 1 },
            { id: 'cs5', q: 'Which layer of the OSI model is responsible for routing?', options: ['Data Link', 'Network', 'Transport', 'Session'], answer: 1 },
            { id: 'cs6', q: 'In databases, ACID property “I” stands for:', options: ['Integrity', 'Isolation', 'Indexing', 'Idempotence'], answer: 1 },
            { id: 'cs7', q: 'B+ Tree indexes are preferred in DBMS because:', options: ['They store data only in internal nodes', 'They keep data sorted and allow range queries efficiently', 'They require no disk I/O', 'They are hash-based'], answer: 1 },
            { id: 'cs8', q: 'In paging, the mapping from virtual to physical memory is maintained by:', options: ['TLB', 'Page Table', 'Cache Controller', 'DMA'], answer: 1 },
            { id: 'cs9', q: 'AES has a fixed block size of:', options: ['64 bits', '128 bits', '192 bits', '256 bits'], answer: 1 },
            { id: 'cs10', q: 'SHA-256 produces a digest of length:', options: ['128 bits', '160 bits', '224 bits', '256 bits'], answer: 3 },
            { id: 'cs11', q: 'Which normal form eliminates transitive dependencies on the primary key?', options: ['1NF', '2NF', '3NF', 'BCNF'], answer: 2 },
            { id: 'cs12', q: 'C++ keyword that prevents method overriding:', options: ['const', 'final', 'override', 'explicit'], answer: 1 },
            { id: 'cs13', q: 'Which statement about CAP theorem is correct?', options: ['You can have Consistency, Availability, and Partition tolerance simultaneously', 'Under network partition, a system must choose between Consistency and Availability', 'CAP applies only to relational databases', 'CAP is obsolete'], answer: 1 },
            { id: 'cs14', q: 'In TCP, congestion control algorithm initially uses:', options: ['Slow start', 'Additive Increase Multiplicative Decrease from start', 'Tahoe fast recovery', 'Random Early Detection'], answer: 0 },
            { id: 'cs15', q: 'Which data structure gives amortized O(1) for push/pop and O(1) access to top?', options: ['Queue', 'Stack', 'Deque', 'Heap'], answer: 1 },
            { id: 'cs16', q: 'NP-Complete problems are:', options: ['In P and NP', 'Not in NP', 'In NP and NP-hard', 'Always solvable in polynomial time'], answer: 2 },
            { id: 'cs17', q: 'Cache write policy that updates cache and memory simultaneously:', options: ['Write-back', 'Write-through', 'Write-around', 'Write-allocate'], answer: 1 },
            { id: 'cs18', q: 'Which protocol secures HTTP over TLS?', options: ['SFTP', 'SSH', 'HTTPS', 'S/MIME'], answer: 2 },
            { id: 'cs19', q: 'In compiler design, LL(1) parsers are:', options: ['Bottom-up', 'Top-down predictive', 'Operator-precedence', 'LR(1)'], answer: 1 },
            { id: 'cs20', q: 'Which of the following is NOT a loss function?', options: ['Cross-Entropy', 'Mean Squared Error', 'ReLU', 'Hinge'], answer: 2 },
            { id: 'cs21', q: 'Docker containers are primarily isolated using:', options: ['Hypervisors', 'Linux namespaces & cgroups', 'Bare metal partitioning', 'Swap space'], answer: 1 },
            { id: 'cs22', q: 'In networks, CIDR /26 has how many usable IPv4 host addresses?', options: ['62', '64', '30', '32'], answer: 0 },
            { id: 'cs23', q: 'Database isolation level that prevents dirty reads but not non-repeatable reads:', options: ['Read Uncommitted', 'Read Committed', 'Repeatable Read', 'Serializable'], answer: 1 },
            { id: 'cs24', q: 'Which algorithm is used for shortest path in a graph with non-negative weights?', options: ['Bellman-Ford', 'Dijkstra', 'Floyd-Warshall', 'Prim'], answer: 1 },
            { id: 'cs25', q: 'Git command to rewrite last commit message (no changes to content):', options: ['git commit --amend', 'git reset --soft HEAD~1', 'git revert HEAD', 'git cherry-pick HEAD~1'], answer: 0 }
        ]
    }, {
        topic: 'IQ',
        id: 'iq',
        questions: [
            { id: 'iq1', q: 'If 3 machines can make 3 toys in 3 minutes, how many toys can 100 machines make in 100 minutes?', options: ['3333', '10000', '3330', '3000'], answer: 1 },
            { id: 'iq2', q: 'A clock shows 3:15. What is the angle between the hour and minute hand?', options: ['7.5°', '0°', '90°', '45°'], answer: 0 },
            { id: 'iq3', q: 'Find the missing term: 2, 6, 12, 20, 30, ?', options: ['36', '40', '42', '44'], answer: 2 },
            { id: 'iq4', q: 'If the code for CAT is DBU, then the code for DOG is?', options: ['EPH', 'EOG', 'DPP', 'FQH'], answer: 0 },
            { id: 'iq5', q: 'Ali is taller than Bilal, Bilal is taller than Ahmed. Ahmed is taller than Usman. Who is the tallest?', options: ['Ali', 'Bilal', 'Ahmed', 'Usman'], answer: 0 },
            { id: 'iq6', q: 'If 5 pencils cost as much as 3 pens and 2 pens cost Rs.20, then what is the cost of 10 pencils?', options: ['40', '50', '60', '30'], answer: 2 },
            { id: 'iq7', q: 'Which one is the odd one out? 36, 49, 64, 81, 100', options: ['36', '49', '64', '81'], answer: 0 },
            { id: 'iq8', q: 'If it takes 10 minutes to boil 1 egg, how long will it take to boil 5 eggs together?', options: ['50 min', '10 min', '15 min', '20 min'], answer: 1 },
            { id: 'iq9', q: 'Which number comes next? 2, 12, 30, 56, ?', options: ['72', '90', '110', '132'], answer: 3 },
            { id: 'iq10', q: 'In a family of 6, A is father, B is mother, C is son, D is daughter, E is brother of A, F is sister of B. How is E related to C?', options: ['Uncle', 'Grandfather', 'Cousin', 'Brother'], answer: 0 },
            { id: 'iq11', q: 'If MONDAY is coded as NQPCFZ, how is FRIDAY coded?', options: ['HTKCBZ', 'HSKCBZ', 'HSKCDA', 'HTKCDA'], answer: 1 },
            { id: 'iq12', q: 'Complete the series: 3, 9, 27, 81, ?', options: ['162', '243', '324', '486'], answer: 1 },
            { id: 'iq13', q: 'Find the odd one: Triangle, Square, Pentagon, Octagon', options: ['Triangle', 'Square', 'Pentagon', 'Octagon'], answer: 0 },
            { id: 'iq14', q: 'If 2x + 3y = 12 and x = 2, what is y?', options: ['2', '3', '4', '5'], answer: 0 },
            { id: 'iq15', q: 'A train 200m long passes a man standing on a platform in 10s. Speed of train?', options: ['20 m/s', '25 m/s', '15 m/s', '30 m/s'], answer: 0 },
            { id: 'iq16', q: 'What comes next: AB, DE, HI, MN, ?', options: ['QR', 'ST', 'UV', 'YZ'], answer: 0 },
            { id: 'iq17', q: 'If 8 workers can build a wall in 12 days, how many days will 6 workers take?', options: ['14', '15', '16', '18'], answer: 3 },
            { id: 'iq18', q: 'Which one is not a prime number? 29, 31, 33, 37', options: ['29', '31', '33', '37'], answer: 2 },
            { id: 'iq19', q: 'The opposite of South-West is?', options: ['North-East', 'North-West', 'South-East', 'East'], answer: 0 },
            { id: 'iq20', q: 'Find missing: 4, 9, 19, 39, ?', options: ['59', '79', '81', '99'], answer: 1 },
            { id: 'iq21', q: 'A is older than B. B is older than C. C is older than D. Who is youngest?', options: ['A', 'B', 'C', 'D'], answer: 3 },
            { id: 'iq22', q: 'If 2 typists can type 20 pages in 2 hours, how many pages can 6 typists type in 6 hours?', options: ['120', '160', '180', '200'], answer: 2 },
            { id: 'iq23', q: 'Which figure is different: Circle, Square, Sphere, Triangle', options: ['Circle', 'Square', 'Sphere', 'Triangle'], answer: 2 },
            { id: 'iq24', q: 'Find the missing number: 11, 21, 43, 87, ?', options: ['174', '176', '178', '180'], answer: 1 },
            { id: 'iq25', q: 'Two dice are rolled. Probability of getting a sum of 9?', options: ['1/6', '1/8', '1/9', '1/12'], answer: 0 },
        ]
    },{
        topic: 'English',
        id: 'english',
        questions: [
            { id: 'en1', q: 'Choose the correct antonym of “Ubiquitous”', options: ['Rare', 'Omnipresent', 'Universal', 'Widespread'], answer: 0 },
            { id: 'en2', q: 'Identify the error: “Neither the teacher nor the students was present.”', options: ['Error in “Neither”', 'Error in “was”', 'Error in “nor”', 'No error'], answer: 1 },
            { id: 'en3', q: 'Which sentence uses the subjunctive mood correctly?', options: ['If I was rich, I would travel.', 'If I were rich, I would travel.', 'If I am rich, I would travel.', 'If I will be rich, I would travel.'], answer: 1 },
            { id: 'en4', q: 'Fill in the blank: He is good ____ Mathematics.', options: ['in', 'on', 'at', 'for'], answer: 2 },
            { id: 'en5', q: 'Choose the synonym of “Obfuscate”', options: ['Clarify', 'Confuse', 'Simplify', 'Reveal'], answer: 1 },
            { id: 'en6', q: 'Correct the sentence: “She insisted to go.”', options: ['She insisted go', 'She insisted on going', 'She insisted going', 'She insisted for go'], answer: 1 },
            { id: 'en7', q: 'Which is a complex sentence?', options: ['She runs every day.', 'She runs and eats.', 'Although she was tired, she finished the work.', 'She is tired but she works.'], answer: 2 },
            { id: 'en8', q: 'Identify the figure of speech: “The silence was deafening.”', options: ['Simile', 'Metaphor', 'Oxymoron', 'Personification'], answer: 2 },
            { id: 'en9', q: 'Choose the correct indirect speech: He said, “I will come tomorrow.”', options: ['He said he will come tomorrow.', 'He said he would come the next day.', 'He said I will come the next day.', 'He said he would come tomorrow.'], answer: 1 },
            { id: 'en10', q: 'Choose the correctly punctuated sentence.', options: ['Its raining, bring umbrella.', 'It’s raining; bring an umbrella.', 'Its raining bring umbrella.', 'It rains; bring umbrella.'], answer: 1 },
            { id: 'en11', q: 'Which word is the odd one out? “Loquacious, Garrulous, Reticent, Talkative”', options: ['Loquacious', 'Reticent', 'Talkative', 'Garrulous'], answer: 1 },
            { id: 'en12', q: 'Choose the correct passive voice: “They are writing a letter.”', options: ['A letter is being written by them.', 'A letter is written by them.', 'A letter was written by them.', 'A letter has been written by them.'], answer: 0 },
            { id: 'en13', q: 'Which is an example of a non-restrictive clause?', options: ['The boy who is tall is my friend.', 'The book, which is on the table, is mine.', 'The man who came late was punished.', 'The girl that sings is my sister.'], answer: 1 },
            { id: 'en14', q: 'Choose the synonym of “Ephemeral”', options: ['Short-lived', 'Eternal', 'Permanent', 'Endless'], answer: 0 },
            { id: 'en15', q: 'Correct the spelling:', options: ['Accomodation', 'Accommodation', 'Acommodation', 'Accommadation'], answer: 1 },
            { id: 'en16', q: 'Which sentence contains parallel structure?', options: ['She likes dancing, to sing, and reading.', 'She likes dancing, singing, and reading.', 'She likes to dance, to sing, and reading.', 'She likes to dance, singing, and reading.'], answer: 1 },
            { id: 'en17', q: 'Identify the tense: “He will have been working here for 5 years by next June.”', options: ['Future Perfect', 'Future Continuous', 'Future Perfect Continuous', 'Present Perfect Continuous'], answer: 2 },
            { id: 'en18', q: 'Which preposition fits: “He is accused ____ theft.”', options: ['of', 'for', 'with', 'on'], answer: 0 },
            { id: 'en19', q: 'Choose the correct conditional: If he ____ harder, he would have passed.', options: ['studied', 'had studied', 'studies', 'was studying'], answer: 1 },
            { id: 'en20', q: 'Which is a gerund phrase?', options: ['To run fast', 'Running fast', 'She runs quickly', 'Run quickly'], answer: 1 },
            { id: 'en21', q: 'Which is the superlative degree? “Good, Better, ____”', options: ['Goodest', 'More Good', 'Best', 'Betterest'], answer: 2 },
            { id: 'en22', q: 'Choose the correct reported speech: She said, “I have finished my work.”', options: ['She said that she finished her work.', 'She said that she had finished her work.', 'She said that she has finished her work.', 'She said that I finished my work.'], answer: 1 },
            { id: 'en23', q: 'Which is an example of an infinitive phrase?', options: ['To eat healthy food', 'Eating healthy food', 'He eats healthy food', 'Eaten healthy food'], answer: 0 },
            { id: 'en24', q: 'Find the error: “He is senior than me.”', options: ['Error in “He”', 'Error in “senior”', 'Error in “than”', 'Error in “me”'], answer: 2 },
            { id: 'en25', q: 'Which sentence uses “who” correctly?', options: ['The man whom called you is outside.', 'The man who called you is outside.', 'The man which called you is outside.', 'The man whose called you is outside.'], answer: 1 },
        ]
    },
    {
        topic: 'Pakistan Studies',
        id: 'pakistanstudies',
        questions: [
            { id: 'ps1', q: 'Who was the first Governor-General of Pakistan?', options: ['Liaquat Ali Khan', 'Muhammad Ali Jinnah', 'Khawaja Nazimuddin', 'Ayub Khan'], answer: 1 },
            { id: 'ps2', q: 'When was the Objectives Resolution passed?', options: ['1947', '1948', '1949', '1950'], answer: 2 },
            { id: 'ps3', q: 'Which river is called the lifeline of Pakistan’s agriculture?', options: ['Indus', 'Jhelum', 'Chenab', 'Ravi'], answer: 0 },
            { id: 'ps4', q: 'Who presented the Lahore Resolution in 1940?', options: ['Allama Iqbal', 'Chaudhry Rahmat Ali', 'A.K. Fazlul Haq', 'Liaquat Ali Khan'], answer: 2 },
            { id: 'ps5', q: 'Which is the highest peak in Pakistan?', options: ['Nanga Parbat', 'K2', 'Broad Peak', 'Gasherbrum I'], answer: 1 },
            { id: 'ps6', q: 'The Indus Waters Treaty was signed in 1960 with the help of?', options: ['World Bank', 'IMF', 'UNESCO', 'SAARC'], answer: 0 },
            { id: 'ps7', q: 'Which constitutional amendment restored the parliamentary system in 1985?', options: ['7th', '8th', '9th', '10th'], answer: 1 },
            { id: 'ps8', q: 'Who was the first female Prime Minister of Pakistan?', options: ['Fatima Jinnah', 'Benazir Bhutto', 'Begum Rana Liaquat', 'Nasim Wali Khan'], answer: 1 },
            { id: 'ps9', q: 'Which desert is located in Sindh?', options: ['Cholistan', 'Thar', 'Kharan', 'Thal'], answer: 1 },
            { id: 'ps10', q: 'When did Pakistan become a nuclear power?', options: ['1996', '1997', '1998', '1999'], answer: 2 },
            { id: 'ps11', q: 'Which language was declared the national language of Pakistan in 1948?', options: ['Sindhi', 'Punjabi', 'Urdu', 'Bengali'], answer: 2 },
            { id: 'ps12', q: 'Which was the capital of Pakistan before Islamabad?', options: ['Lahore', 'Karachi', 'Quetta', 'Peshawar'], answer: 1 },
            { id: 'ps13', q: 'In which year did Pakistan join the United Nations?', options: ['1947', '1948', '1949', '1950'], answer: 1 },
            { id: 'ps14', q: 'Which is the longest river of Pakistan?', options: ['Indus', 'Chenab', 'Jhelum', 'Ravi'], answer: 0 },
            { id: 'ps15', q: 'Which province has the largest area in Pakistan?', options: ['Sindh', 'Punjab', 'Balochistan', 'KPK'], answer: 2 },
            { id: 'ps16', q: 'Who was the first President of Pakistan?', options: ['Iskander Mirza', 'Ayub Khan', 'Yahya Khan', 'Zia-ul-Haq'], answer: 0 },
            { id: 'ps17', q: 'Which mountain range separates Pakistan from Afghanistan?', options: ['Himalayas', 'Hindu Kush', 'Karakoram', 'Sulaiman'], answer: 1 },
            { id: 'ps18', q: 'When was the first constitution of Pakistan enforced?', options: ['1949', '1952', '1956', '1962'], answer: 2 },
            { id: 'ps19', q: 'Ranikot Fort is located in which province?', options: ['Punjab', 'Sindh', 'Balochistan', 'KPK'], answer: 1 },
            { id: 'ps20', q: 'Who is the author of “Pakistan: The Formative Phase”?', options: ['Stanley Wolpert', 'K.K. Aziz', 'Khalid Bin Sayeed', 'Ian Talbot'], answer: 2 },
            { id: 'ps21', q: 'The Durand Line agreement was signed between British India and?', options: ['Afghanistan', 'Iran', 'China', 'Russia'], answer: 0 },
            { id: 'ps22', q: 'Which is the largest natural lake of Pakistan?', options: ['Saif ul Malook', 'Haleji', 'Manchar', 'Attabad'], answer: 2 },
            { id: 'ps23', q: 'The Simla Agreement was signed in?', options: ['1970', '1971', '1972', '1973'], answer: 2 },
            { id: 'ps24', q: 'When did East Pakistan become Bangladesh?', options: ['1970', '1971', '1972', '1973'], answer: 1 },
            { id: 'ps25', q: 'Who was the Prime Minister during the 1965 war?', options: ['Ayub Khan', 'Zulfiqar Ali Bhutto', 'Liaquat Ali Khan', 'Chaudhry Muhammad Ali'], answer: 0 },
        ]
    }
];

let state = { topicIndex: null, current: 0, answers: {} };

// DOM Refs
const startScreen = document.getElementById('start-screen');
const startButton = document.getElementById('start-button');
const topicsScreen = document.getElementById('topics-screen');
const topicsContainer = document.getElementById('topics');
const backToStart = document.getElementById('back-to-start');
const quizScreen = document.getElementById('quiz-screen');
const topicTitle = document.getElementById('topic-title');
const qIndexEl = document.getElementById('q-index');
const qTotalEl = document.getElementById('q-total');
const qTotalEl2 = document.getElementById('q-total-2');
const questionText = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const clearBtn = document.getElementById('clear-btn');
const answeredCountEl = document.getElementById('answered-count');
const quitTopics = document.getElementById('quit-topics');
const resultsScreen = document.getElementById('results-screen');
const resultsTopic = document.getElementById('results-topic');
const scoreVal = document.getElementById('score-val');
const scoreTotal = document.getElementById('score-total');
const resultsList = document.getElementById('results-list');
const resultsBack = document.getElementById('results-back-topics');
const retryBtn = document.getElementById('retry-topic');

// Screens
function showStart() { startScreen.classList.remove('hidden'); topicsScreen.classList.add('hidden'); quizScreen.classList.add('hidden'); resultsScreen.classList.add('hidden'); }
function showTopics() { startScreen.classList.add('hidden'); topicsScreen.classList.remove('hidden'); quizScreen.classList.add('hidden'); resultsScreen.classList.add('hidden'); }
function showQuiz() { startScreen.classList.add('hidden'); topicsScreen.classList.add('hidden'); quizScreen.classList.remove('hidden'); resultsScreen.classList.add('hidden'); }
function showResultsScreen() { startScreen.classList.add('hidden'); topicsScreen.classList.add('hidden'); quizScreen.classList.add('hidden'); resultsScreen.classList.remove('hidden'); }

// Topics render
function renderTopics() {
    topicsContainer.innerHTML = '';
    QUIZ_DATA.forEach((t, i) => {
        const el = document.createElement('button');
        el.className = 'p-4 border rounded-lg text-left hover:shadow-md';
        el.innerHTML = `<div class="text-lg font-semibold">${t.topic}</div><div class="text-sm text-gray-600">${t.questions.length} questions</div>`;
        el.addEventListener('click', () => startTopic(i));
        topicsContainer.appendChild(el);
    });
}

// Start quiz
function startTopic(i) {
    state.topicIndex = i;
    state.current = 0;
    state.answers = {};
    showQuiz();
    renderQuestion();
    updateAnsweredCount();
}

// Render Qs
function renderQuestion() {
    const topic = QUIZ_DATA[state.topicIndex];
    if (!topic) return;
    const q = topic.questions[state.current];
    if (!q) return;

    topicTitle.textContent = topic.topic;
    questionText.textContent = q.q;
    qIndexEl.textContent = state.current + 1;
    qTotalEl.textContent = topic.questions.length;
    qTotalEl2.textContent = topic.questions.length;

    optionsList.innerHTML = '';
    q.options.forEach((opt, idx) => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'p-3 rounded-lg border-2 border-black w-full text-left';
        if (state.answers[q.id] === idx) btn.classList.add('bg-black', 'text-white');
        btn.innerHTML = `<div class="font-mono w-6 inline-block mr-3">${String.fromCharCode(65 + idx)}</div><span>${opt}</span>`;
        btn.addEventListener('click', () => {
            state.answers[q.id] = idx;
            renderQuestion();
            updateAnsweredCount();
        });
        li.appendChild(btn);
        optionsList.appendChild(li);
    });

    prevBtn.disabled = state.current === 0;
    const answered = state.answers[q.id] !== undefined;
    nextBtn.disabled = !answered;
    nextBtn.textContent = state.current < topic.questions.length - 1 ? 'Next' : 'Finish';
}

function updateAnsweredCount() {
    const topic = QUIZ_DATA[state.topicIndex];
    if (!topic) { answeredCountEl.textContent = '0'; return; }
    const count = Object.keys(state.answers).length;
    answeredCountEl.textContent = count;
}

// Navigation
prevBtn.addEventListener('click', () => {
    if (state.current > 0) { state.current--; renderQuestion(); }
});
nextBtn.addEventListener('click', () => {
    const topic = QUIZ_DATA[state.topicIndex];
    if (!topic) return;
    if (state.current < topic.questions.length - 1) {
        state.current++;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        renderQuestion();
    } else showResults();
});
startButton.addEventListener('click', () => { renderTopics(); showTopics(); });
clearBtn.addEventListener('click', () => {
    const topic = QUIZ_DATA[state.topicIndex];
    if (!topic) return;
    const qid = topic.questions[state.current].id;
    delete state.answers[qid];
    renderQuestion();
    updateAnsweredCount();
});
quitTopics.addEventListener('click', () => { renderTopics(); showTopics(); });

// Results
function showResults() {
    const topic = QUIZ_DATA[state.topicIndex];
    if (!topic) return;
    showResultsScreen();
    resultsTopic.textContent = topic.topic;
    resultsList.innerHTML = '';
    let score = 0;

    topic.questions.forEach((q, idx) => {
        const user = state.answers[q.id];
        const correct = q.answer;
        if (user === correct) score++;
        const block = document.createElement('li');
        block.className = 'p-4 border rounded-lg';
        block.innerHTML = `
            <div class="mb-2 font-semibold">${idx + 1}. ${q.q}</div>
            <div>
                ${q.options.map((opt, i) => `
                    <div class="p-2 rounded ${i === correct ? 'bg-green-100 text-green-800' : ''} ${i === user && i !== correct ? 'bg-red-100 text-red-800' : ''}">
                        <span class="font-mono w-6 inline-block mr-2">${String.fromCharCode(65 + i)}</span>
                        <span>${opt}</span>
                        ${i === correct ? '<span class="ml-2 font-bold">(Correct)</span>' : ''}
                        ${i === user && i !== correct ? '<span class="ml-2 font-bold">(Your answer)</span>' : ''}
                    </div>
                `).join('')}
            </div>
        `;
        resultsList.appendChild(block);
    });

    scoreVal.textContent = score;
    scoreTotal.textContent = topic.questions.length;
}
resultsBack.addEventListener('click', () => { renderTopics(); showTopics(); });
retryBtn.addEventListener('click', () => { startTopic(state.topicIndex); });
backToStart.addEventListener('click', () => { showStart(); });

// Init
showStart();
