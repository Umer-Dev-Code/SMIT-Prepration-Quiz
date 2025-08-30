const QUIZ_DATA = [
    {
        topic: 'Islamiyat',
        id: 'islamiyat',
        questions: [
            { id: 'is1', q: 'How many Surahs are in the Quran?', options: ['110', '114', '120', '100'], answer: 1 },
            { id: 'is2', q: 'What is the name of the first Surah in the Quran?', options: ['Surah Alaq', 'Surah Baqarah', 'Surah Fatiha', 'Surah Ikhlas'], answer: 2 },
            { id: 'is3', q: 'Who was the first caliph of Islam?', options: ['Hazrat Umar (R.A)', 'Hazrat Abu Bakr (R.A)', 'Hazrat Usman (R.A)', 'Hazrat Ali (R.A)'], answer: 1 },
            { id: 'is4', q: 'In which city was the first wahi revealed?', options: ['Madina', 'Makkah', 'Taif', 'Jedda'], answer: 1 },
            { id: 'is5', q: 'What is the name of the longest Surah in the Quran?', options: ['Surah Fatiha', 'Surah Baqarah', 'Surah Yaseen', 'Surah Rahman'], answer: 1 },
            { id: 'is6', q: 'How many pillars of Islam are there?', options: ['4', '5', '6', '7'], answer: 1 },
            { id: 'is7', q: 'What is the name of the treaty of Hudaybiyyah signed with?', options: ['Banu Hashim', 'Quraish', 'Banu Bakr', 'Ansar'], answer: 1 },
            { id: 'is8', q: 'Which Surah is known as the heart of the Quran?', options: ['Surah Ikhlas', 'Surah Fatiha', 'Surah Yaseen', 'Surah Baqarah'], answer: 2 },
            { id: 'is9', q: 'Which prophet is mentioned as Khalilullah (friend of Allah)?', options: ['Hazrat Musa (A.S)', 'Hazrat Ibrahim (A.S)', 'Hazrat Nuh (A.S)', 'Hazrat Isa (A.S)'], answer: 1 },
            { id: 'is10', q: 'In which battle did Muslims first fight the Quraish?', options: ['Badr', 'Uhud', 'Khandaq', 'Tabuk'], answer: 0 },
            { id: 'is11', q: 'Who accompanied the Prophet (S.A.W) during Hijrat to Madina?', options: ['Hazrat Ali (R.A)', 'Hazrat Umar (R.A)', 'Hazrat Abu Bakr (R.A)', 'Hazrat Hamza (R.A)'], answer: 2 },
            { id: 'is12', q: 'What is another name for Surah Al-Fatiha?', options: ['Al-Noor', 'Umm-ul-Kitab', 'Al-Furqan', 'Al-Majid'], answer: 1 },
            { id: 'is13', q: 'Which prophet’s story is mentioned most in the Quran?', options: ['Hazrat Yusuf (A.S)', 'Hazrat Isa (A.S)', 'Hazrat Musa (A.S)', 'Hazrat Ibrahim (A.S)'], answer: 2 },
            { id: 'is14', q: 'How many times is Salah offered daily?', options: ['4', '5', '6', '7'], answer: 1 },
            { id: 'is15', q: 'In which month is fasting obligatory?', options: ['Muharram', 'Ramzan', 'Shawwal', 'Rabi-ul-Awwal'], answer: 1 },
            { id: 'is16', q: 'What is the name of the battle fought in a trench?', options: ['Badr', 'Uhud', 'Khandaq', 'Hunayn'], answer: 2 },
            { id: 'is17', q: 'Which Surah is about oneness of Allah?', options: ['Surah Fatiha', 'Surah Alaq', 'Surah Ikhlas', 'Surah Nas'], answer: 2 },
            { id: 'is18', q: 'Which city was conquered during Hazrat Umar (R.A)’s time?', options: ['Egypt', 'Persia', 'Syria', 'India'], answer: 2 },
            { id: 'is19', q: 'What is the first word of Surah Alaq?', options: ['Bismillah', 'Alhamdu', 'Iqra', 'Subhan'], answer: 2 },
            { id: 'is20', q: 'Where was Hazrat Ali (R.A) martyred?', options: ['Madina', 'Kufa', 'Basra', 'Baghdad'], answer: 1 },
            { id: 'is21', q: 'How many prostrations (Sajda) are in the Quran?', options: ['12', '14', '16', '10'], answer: 1 },
            { id: 'is22', q: 'How many years was Hazrat Abu Bakr (R.A) caliph?', options: ['2', '3', '2.5', '4'], answer: 2 },
            { id: 'is23', q: 'What does Surah Noor talk about?', options: ['Zakat', 'Hijab', 'Namaz', 'Hajj'], answer: 1 },
            { id: 'is24', q: 'What is the last message of the Quran about?', options: ['Prayer', 'Fasting', 'Completing the religion', 'Charity'], answer: 2 },
            { id: 'is25', q: 'What is Surah Yaseen called in the Quran?', options: ['Heart', 'Soul', 'Light', 'Book'], answer: 0 }
        ]
    },
    {
        topic: 'Mathematics',
        id: 'math',
        questions: [
            { id: 'm1', q: 'Solve: 2 + 3 × 4 = ?', options: ['20', '14', '12', '15'], answer: 1 },
            { id: 'm2', q: 'What is 25% of 200?', options: ['50', '25', '75', '100'], answer: 0 },
            { id: 'm3', q: 'Solve for x: x + 5 = 12', options: ['6', '7', '8', '5'], answer: 1 },
            { id: 'm4', q: 'What is the area of a square with side 4 cm?', options: ['16 cm²', '12 cm²', '8 cm²', '20 cm²'], answer: 0 },
            { id: 'm5', q: 'What is 2³?', options: ['6', '8', '12', '10'], answer: 1 },
            { id: 'm6', q: 'Find the perimeter of a rectangle with length 5 cm and width 3 cm.', options: ['15 cm', '16 cm', '14 cm', '18 cm'], answer: 1 },
            { id: 'm7', q: 'Simplify: 15 ÷ 3 + 2', options: ['7', '5', '10', '8'], answer: 0 },
            { id: 'm8', q: 'What is the value of 3² + 4²?', options: ['25', '20', '15', '30'], answer: 0 },
            { id: 'm9', q: 'A bag has 4 red and 6 blue balls. Probability of picking a red ball?', options: ['2/5', '3/5', '1/2', '4/5'], answer: 0 },
            { id: 'm10', q: 'Solve: 4x = 16', options: ['3', '4', '5', '2'], answer: 1 },
            { id: 'm11', q: 'What is the next number: 2, 4, 6, 8, ?', options: ['12', '10', '14', '9'], answer: 1 },
            { id: 'm12', q: 'What is the value of π (pi) approximately?', options: ['3.14', '2.71', '1.41', '4.20'], answer: 0 },
            { id: 'm13', q: 'What is 10% of 50?', options: ['10', '5', '15', '20'], answer: 1 },
            { id: 'm14', q: 'What is the area of a triangle with base 6 cm and height 4 cm?', options: ['10 cm²', '12 cm²', '14 cm²', '16 cm²'], answer: 1 },
            { id: 'm15', q: 'Solve: 2x + 3 = 9', options: ['2', '3', '4', '5'], answer: 1 },
            { id: 'm16', q: 'What is 5 × (2 + 3)?', options: ['25', '15', '20', '30'], answer: 0 },
            { id: 'm17', q: 'What is the LCM of 6 and 8?', options: ['12', '24', '18', '36'], answer: 1 },
            { id: 'm18', q: 'What is 100 ÷ 4?', options: ['20', '25', '30', '15'], answer: 1 },
            { id: 'm19', q: 'If a car travels 60 km in 2 hours, what is its speed?', options: ['20 km/h', '30 km/h', '40 km/h', '25 km/h'], answer: 1 },
            { id: 'm20', q: 'What is the next term in 3, 6, 9, 12, ...?', options: ['15', '18', '14', '16'], answer: 0 },
            { id: 'm21', q: 'What is 1/2 + 1/4?', options: ['1/4', '3/4', '1/2', '1'], answer: 1 },
            { id: 'm22', q: 'What is the value of 7 - (-3)?', options: ['4', '10', '3', '7'], answer: 1 },
            { id: 'm23', q: 'What is the perimeter of a square with side 5 cm?', options: ['20 cm', '15 cm', '25 cm', '10 cm'], answer: 0 },
            { id: 'm24', q: 'What is 3/5 of 20?', options: ['10', '12', '15', '8'], answer: 1 },
            { id: 'm25', q: 'Solve: x - 7 = 3', options: ['9', '10', '8', '11'], answer: 1 }
        ]
    },
    {
        topic: 'Computer Science',
        id: 'cs',
        questions: [
            { id: 'cs1', q: 'What does CPU stand for?', options: ['Central Processing Unit', 'Computer Processing Unit', 'Control Processing Unit', 'Core Processing Unit'], answer: 0 },
            { id: 'cs2', q: 'Which is an example of an operating system?', options: ['Microsoft Word', 'Windows', 'Google Chrome', 'Notepad'], answer: 1 },
            { id: 'cs3', q: 'What is the full form of RAM?', options: ['Read Access Memory', 'Random Access Memory', 'Run Access Memory', 'Real Access Memory'], answer: 1 },
            { id: 'cs4', q: 'What is used to connect to the internet?', options: ['Keyboard', 'Mouse', 'Router', 'Monitor'], answer: 2 },
            { id: 'cs5', q: 'Which language is used to create web pages?', options: ['Python', 'HTML', 'Java', 'C++'], answer: 1 },
            { id: 'cs6', q: 'What does a database store?', options: ['Images', 'Data', 'Videos', 'Games'], answer: 1 },
            { id: 'cs7', q: 'What is a common file format for images?', options: ['PDF', 'JPEG', 'TXT', 'DOC'], answer: 1 },
            { id: 'cs8', q: 'What is the purpose of a firewall?', options: ['Cooling the computer', 'Protecting from viruses', 'Speeding up the system', 'Displaying graphics'], answer: 1 },
            { id: 'cs9', q: 'What does USB stand for?', options: ['Universal Serial Bus', 'United Serial Bus', 'Ultra Speed Bus', 'Universal Storage Bus'], answer: 0 },
            { id: 'cs10', q: 'Which is a programming language?', options: ['Photoshop', 'Python', 'Excel', 'PowerPoint'], answer: 1 },
            { id: 'cs11', q: 'What is used to store data permanently?', options: ['RAM', 'Hard Disk', 'Cache', 'Register'], answer: 1 },
            { id: 'cs12', q: 'What does WWW stand for?', options: ['World Wide Web', 'World Web Wide', 'Wide Web World', 'Web World Wide'], answer: 0 },
            { id: 'cs13', q: 'What is the smallest unit of digital information?', options: ['Byte', 'Bit', 'Kilobyte', 'Megabyte'], answer: 1 },
            { id: 'cs14', q: 'What is the purpose of an antivirus?', options: ['Speed up computer', 'Protect from malware', 'Create backups', 'Manage files'], answer: 1 },
            { id: 'cs15', q: 'Which is a web browser?', options: ['Google Chrome', 'Microsoft Word', 'Notepad', 'VLC Player'], answer: 0 },
            { id: 'cs16', q: 'What does a compiler do?', options: ['Runs a program', 'Converts code to machine language', 'Stores data', 'Creates websites'], answer: 1 },
            { id: 'cs17', q: 'What is the extension for Python files?', options: ['.txt', '.py', '.doc', '.jpg'], answer: 1 },
            { id: 'cs18', q: 'What protocol is used for secure websites?', options: ['HTTP', 'FTP', 'HTTPS', 'SMTP'], answer: 2 },
            { id: 'cs19', q: 'What is used to write code?', options: ['Monitor', 'Text Editor', 'Speaker', 'Printer'], answer: 1 },
            { id: 'cs20', q: 'What does GUI stand for?', options: ['General User Interface', 'Graphical User Interface', 'Global User Interface', 'Guided User Interface'], answer: 1 },
            { id: 'cs21', q: 'What is used to manage files on a computer?', options: ['File Explorer', 'Web Browser', 'Media Player', 'Calculator'], answer: 0 },
            { id: 'cs22', q: 'What is the brain of a computer?', options: ['RAM', 'CPU', 'Hard Disk', 'Monitor'], answer: 1 },
            { id: 'cs23', q: 'What does SQL stand for?', options: ['Simple Query Language', 'Structured Query Language', 'Standard Query Language', 'System Query Language'], answer: 1 },
            { id: 'cs24', q: 'Which is a type of software?', options: ['Monitor', 'Keyboard', 'Operating System', 'Router'], answer: 2 },
            { id: 'cs25', q: 'What is used to save changes in Git?', options: ['git push', 'git commit', 'git pull', 'git clone'], answer: 1 }
        ]
    },
    {
        topic: 'IQ',
        id: 'iq',
        questions: [
            { id: 'iq1', q: 'If 2 pens cost 10 Rs, how much do 4 pens cost?', options: ['15 Rs', '20 Rs', '25 Rs', '10 Rs'], answer: 1 },
            { id: 'iq2', q: 'What comes next: 1, 3, 5, 7, ?', options: ['9', '10', '11', '8'], answer: 0 },
            { id: 'iq3', q: 'Which is the odd one out: 4, 9, 16, 25, 30?', options: ['30', '9', '16', '25'], answer: 0 },
            { id: 'iq4', q: 'If A = 1, B = 2, C = 3, what is the value of D?', options: ['3', '4', '5', '2'], answer: 1 },
            { id: 'iq5', q: 'Ali is taller than Bilal, and Bilal is taller than Usman. Who is the tallest?', options: ['Bilal', 'Usman', 'Ali', 'Cannot tell'], answer: 2 },
            { id: 'iq6', q: 'If 3 apples cost 15 Rs, what is the cost of 6 apples?', options: ['30 Rs', '25 Rs', '20 Rs', '35 Rs'], answer: 0 },
            { id: 'iq7', q: 'Which shape is different: Circle, Square, Triangle, Circle?', options: ['Square', 'Triangle', 'Circle', 'None'], answer: 1 },
            { id: 'iq8', q: 'If a train travels 100 km in 2 hours, what is its speed?', options: ['40 km/h', '50 km/h', '60 km/h', '30 km/h'], answer: 1 },
            { id: 'iq9', q: 'What is the next number: 5, 10, 15, 20, ?', options: ['25', '30', '20', '35'], answer: 0 },
            { id: 'iq10', q: 'A is father, B is mother, C is their son. Who is C to A?', options: ['Brother', 'Father', 'Son', 'Uncle'], answer: 2 },
            { id: 'iq11', q: 'If CAT is coded as 3-1-20, how is DOG coded?', options: ['4-15-7', '5-15-7', '4-14-7', '5-14-7'], answer: 0 },
            { id: 'iq12', q: 'Complete the series: 2, 4, 8, 16, ?', options: ['32', '24', '28', '20'], answer: 0 },
            { id: 'iq13', q: 'Which is the odd one out: Apple, Banana, Carrot, Mango?', options: ['Banana', 'Carrot', 'Apple', 'Mango'], answer: 1 },
            { id: 'iq14', q: 'If 3 + x = 7, what is x?', options: ['3', '4', '5', '2'], answer: 1 },
            { id: 'iq15', q: 'What is the next letter: A, C, E, G, ?', options: ['I', 'J', 'H', 'K'], answer: 0 },
            { id: 'iq16', q: 'If 5 workers build a wall in 10 days, how long for 10 workers?', options: ['5 days', '8 days', '10 days', '6 days'], answer: 0 },
            { id: 'iq17', q: 'Which number is not even: 2, 4, 7, 8?', options: ['2', '4', '7', '8'], answer: 2 },
            { id: 'iq18', q: 'What is the opposite of big?', options: ['Large', 'Small', 'Tall', 'Wide'], answer: 1 },
            { id: 'iq19', q: 'If 2 books cost 20 Rs, how much for 5 books?', options: ['40 Rs', '50 Rs', '30 Rs', '60 Rs'], answer: 1 },
            { id: 'iq20', q: 'What comes next: 10, 20, 30, 40, ?', options: ['50', '45', '60', '55'], answer: 0 },
            { id: 'iq21', q: 'A is older than B, and B is older than C. Who is youngest?', options: ['A', 'B', 'C', 'Cannot tell'], answer: 2 },
            { id: 'iq22', q: 'If 2 cars take 4 hours to travel 80 km, how long for 4 cars to travel 80 km?', options: ['4 hours', '2 hours', '3 hours', '5 hours'], answer: 0 },
            { id: 'iq23', q: 'Which is different: Red, Blue, Green, Square?', options: ['Red', 'Blue', 'Green', 'Square'], answer: 3 },
            { id: 'iq24', q: 'What is the next number: 1, 4, 7, 10, ?', options: ['12', '13', '14', '15'], answer: 1 },
            { id: 'iq25', q: 'If a bag has 3 red and 2 blue balls, what is the probability of picking a blue ball?', options: ['2/5', '3/5', '1/2', '1/5'], answer: 0 }
        ]
    },
    {
        topic: 'English',
        id: 'english',
        questions: [
            { id: 'en1', q: 'What is the opposite of “big”?', options: ['Large', 'Small', 'Huge', 'Great'], answer: 1 },
            { id: 'en2', q: 'Choose the correct sentence: ', options: ['She go to school.', 'She goes to school.', 'She going to school.', 'She gone to school.'], answer: 1 },
            { id: 'en3', q: 'What is the plural of “book”?', options: ['Books', 'Bookes', 'Bookies', 'Book'], answer: 0 },
            { id: 'en4', q: 'Fill in the blank: He is good ___ singing.', options: ['in', 'on', 'at', 'for'], answer: 2 },
            { id: 'en5', q: 'What is a synonym for “happy”?', options: ['Sad', 'Joyful', 'Angry', 'Tired'], answer: 1 },
            { id: 'en6', q: 'Correct the sentence: “He run fast.”', options: ['He runs fast.', 'He running fast.', 'He run faster.', 'He ran fast.'], answer: 0 },
            { id: 'en7', q: 'Which is a complete sentence?', options: ['She sings.', 'Singing loudly.', 'The loud song.', 'Sing a song.'], answer: 0 },
            { id: 'en8', q: 'What is the figure of speech in “He is a lion”?', options: ['Simile', 'Metaphor', 'Personification', 'Oxymoron'], answer: 1 },
            { id: 'en9', q: 'Change to indirect speech: She said, “I am happy.”', options: ['She said she is happy.', 'She said she was happy.', 'She says she is happy.', 'She said I am happy.'], answer: 1 },
            { id: 'en10', q: 'Which sentence is correct?', options: ['Its sunny today.', 'It’s sunny today.', 'Its’ sunny today.', 'It sunny today.'], answer: 1 },
            { id: 'en11', q: 'Which word is different: Big, Large, Small, Huge?', options: ['Big', 'Large', 'Small', 'Huge'], answer: 2 },
            { id: 'en12', q: 'Change to passive voice: “She writes a letter.”', options: ['A letter is written by her.', 'A letter was written by her.', 'A letter is write by her.', 'A letter writes her.'], answer: 0 },
            { id: 'en13', q: 'Which sentence has a describing word?', options: ['She runs.', 'The cat sleeps.', 'The big dog barks.', 'He jumps high.'], answer: 2 },
            { id: 'en14', q: 'What is a synonym for “quick”?', options: ['Slow', 'Fast', 'Lazy', 'Tired'], answer: 1 },
            { id: 'en15', q: 'Correct the spelling: “Recieve”', options: ['Receive', 'Recive', 'Receeve', 'Reccieve'], answer: 0 },
            { id: 'en16', q: 'Which sentence is correct?', options: ['They likes to play.', 'They like to play.', 'They liking to play.', 'They like playing.'], answer: 1 },
            { id: 'en17', q: 'What tense is “She is singing”?', options: ['Past', 'Present', 'Future', 'Past Perfect'], answer: 1 },
            { id: 'en18', q: 'Fill in: “He is fond ___ music.”', options: ['of', 'for', 'with', 'on'], answer: 0 },
            { id: 'en19', q: 'Complete: If I ___ rich, I would travel.', options: ['am', 'were', 'was', 'will be'], answer: 1 },
            { id: 'en20', q: 'Which is a naming word?', options: ['Run', 'Big', 'Dog', 'Fast'], answer: 2 },
            { id: 'en21', q: 'What is the superlative of “good”?', options: ['Better', 'Best', 'Goodest', 'More good'], answer: 1 },
            { id: 'en22', q: 'Change to reported speech: He said, “I like tea.”', options: ['He said he likes tea.', 'He said he liked tea.', 'He says he liked tea.', 'He said I like tea.'], answer: 1 },
            { id: 'en23', q: 'Which is an action word?', options: ['Table', 'Run', 'Big', 'Blue'], answer: 1 },
            { id: 'en24', q: 'Find the error: “She is more tall than me.”', options: ['She', 'more tall', 'than', 'me'], answer: 1 },
            { id: 'en25', q: 'Which sentence is correct?', options: ['The man who sing is here.', 'The man which sings is here.', 'The man who sings is here.', 'The man whose sings is here.'], answer: 2 }
        ]
    },
    {
        topic: 'Pakistan Studies',
        id: 'pakistanstudies',
        questions: [
            { id: 'ps1', q: 'Who founded Pakistan?', options: ['Liaquat Ali Khan', 'Allama Iqbal', 'Muhammad Ali Jinnah', 'Ayub Khan'], answer: 2 },
            { id: 'ps2', q: 'When was Pakistan created?', options: ['1947', '1948', '1949', '1950'], answer: 0 },
            { id: 'ps3', q: 'Which is the longest river in Pakistan?', options: ['Jhelum', 'Indus', 'Chenab', 'Ravi'], answer: 1 },
            { id: 'ps4', q: 'Who gave the idea of Pakistan?', options: ['Chaudhry Rahmat Ali', 'Allama Iqbal', 'Liaquat Ali Khan', 'A.K. Fazlul Haq'], answer: 1 },
            { id: 'ps5', q: 'What is the highest mountain in Pakistan?', options: ['Nanga Parbat', 'K2', 'Rakaposhi', 'Broad Peak'], answer: 1 },
            { id: 'ps6', q: 'Which organization helped with the Indus Waters Treaty?', options: ['UNESCO', 'World Bank', 'IMF', 'SAARC'], answer: 1 },
            { id: 'ps7', q: 'What is the national language of Pakistan?', options: ['Punjabi', 'Sindhi', 'Urdu', 'Pashto'], answer: 2 },
            { id: 'ps8', q: 'Who was Pakistan’s first female Prime Minister?', options: ['Fatima Jinnah', 'Benazir Bhutto', 'Begum Rana Liaquat', 'Hina Rabbani Khar'], answer: 1 },
            { id: 'ps9', q: 'Which desert is in Sindh?', options: ['Thar', 'Cholistan', 'Thal', 'Kharan'], answer: 0 },
            { id: 'ps10', q: 'When did Pakistan test its nuclear bomb?', options: ['1997', '1998', '1999', '2000'], answer: 1 },
            { id: 'ps11', q: 'What was Pakistan’s first capital?', options: ['Lahore', 'Islamabad', 'Karachi', 'Rawalpindi'], answer: 2 },
            { id: 'ps12', q: 'Which city is called the heart of Pakistan?', options: ['Karachi', 'Lahore', 'Islamabad', 'Peshawar'], answer: 1 },
            { id: 'ps13', q: 'When did Pakistan join the United Nations?', options: ['1947', '1948', '1949', '1950'], answer: 1 },
            { id: 'ps14', q: 'Which province has the most area?', options: ['Punjab', 'Sindh', 'Balochistan', 'KPK'], answer: 2 },
            { id: 'ps15', q: 'Who was Pakistan’s first President?', options: ['Ayub Khan', 'Iskander Mirza', 'Zia-ul-Haq', 'Yahya Khan'], answer: 1 },
            { id: 'ps16', q: 'Which range separates Pakistan from Afghanistan?', options: ['Himalayas', 'Karakoram', 'Hindu Kush', 'Sulaiman'], answer: 2 },
            { id: 'ps17', q: 'When was Pakistan’s first constitution made?', options: ['1956', '1952', '1949', '1962'], answer: 0 },
            { id: 'ps18', q: 'Where is Ranikot Fort located?', options: ['Punjab', 'Sindh', 'Balochistan', 'KPK'], answer: 1 },
            { id: 'ps19', q: 'What is the national flower of Pakistan?', options: ['Rose', 'Jasmine', 'Tulip', 'Sunflower'], answer: 1 },
            { id: 'ps20', q: 'Which agreement was signed after the 1971 war?', options: ['Tashkent Agreement', 'Simla Agreement', 'Lahore Agreement', 'Karachi Agreement'], answer: 1 },
            { id: 'ps21', q: 'Which country shares the Durand Line with Pakistan?', options: ['India', 'Afghanistan', 'China', 'Iran'], answer: 1 },
            { id: 'ps22', q: 'Which is Pakistan’s largest lake?', options: ['Saif ul Malook', 'Manchar', 'Haleji', 'Attabad'], answer: 1 },
            { id: 'ps23', q: 'When was the Simla Agreement signed?', options: ['1971', '1972', '1970', '1973'], answer: 1 },
            { id: 'ps24', q: 'When did East Pakistan become Bangladesh?', options: ['1970', '1971', '1972', '1973'], answer: 1 },
            { id: 'ps25', q: 'What is the national sport of Pakistan?', options: ['Cricket', 'Hockey', 'Football', 'Kabaddi'], answer: 1 }
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
