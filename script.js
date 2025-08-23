// Example data for demonstration
// ...existing code...
const QUIZ_DATA = [
    {
        topic: 'Islamiyat',
        id: 'islamiyat',
        questions: [
            // Fix 1: Added 'options' key
            { id: 'is1', q: 'Kis ne Quran Pak ko kitaabi shakl mein jama kiya?', options: ['Hazrat Abu Bakr (R.A)', 'Hazrat Uthman (R.A)', 'Hazrat Ali (R.A)', 'Hazrat Umar (R.A)'], answer: 0 },
            { id: 'is2', q: 'Quran mein kitni Makki Suratein hain?', options: ['86', '87', '85', '90'], answer: 0 },
            { id: 'is3', q: 'Islami calendar ka pehla mahina konsa hai?', options: ['Muharram', 'Safar', 'Rabi-ul-Awwal', 'Ramadan'], answer: 0 },
            { id: 'is4', q: 'Quran mein kul kitne Rukus hain?', options: ['558', '540', '555', '570'], answer: 2 },
            { id: 'is5', q: 'Ghazwa-e-Uhud kis hijri saal mein hua?', options: ['2 AH', '3 AH', '4 AH', '5 AH'], answer: 1 },
            { id: 'is6', q: 'slam ka pehla Muazzin kaun tha?', options: ['Hazrat Bilal (R.A)', 'Hazrat Salman (R.A)', 'Hazrat Abu Huraira (R.A)', 'Hazrat Anas (R.A)'], answer: 0 },
            { id: 'is7', q: 'Quran mein “Muhammad” ka naam kitni dafa aaya hai?', options: ['3', '4', '5', '6'], answer: 1 },
            { id: 'is8', q: 'Musalmanon ka pehla Qibla kya tha?', options: ['Kaaba', 'Bait-ul-Muqaddas', 'Madina', 'Mount Arafat'], answer: 0 },
            { id: 'is9', q: 'Kis sahabi ko “Allah ka Talwar” kaha jata hai?' , options: ['Hazrat Umar (R.A)', 'Hazrat Khalid bin Waleed (R.A)', 'Hazrat Ali (R.A)', 'Hazrat Hamza (R.A)'], answer: 1 },
            { id: 'is10', q: 'Ayat-ul-Kursi kis Surah mein hai?', options: ['Surah Baqarah', 'Surah Yaseen', 'Surah Al-Imran', 'Surah Nisa'], answer: 0 },
            { id: 'is11', q: 'Zakat ka literal matlab kya hai?', options: ['Purification', 'Charity', 'Donation', 'Sacrifice'], answer: 0 }
        ]
    },
    {
        topic: 'Mathematics',
        id: 'math',
        questions: [
            { id: 'm1', q: 'What is the derivative of sin(x)?', options: ['cos(x)', '-cos(x)', '-sin(x)', 'sec(x)'], answer: 0 },
            { id: 'm2', q: 'If 2x + 5 = 13, then x = ?', options: ['3', '4', '5', '6'], answer: 1 },
            { id: 'm3', q: 'What is the sum of the angles of a pentagon?', options: ['360°', '540°', '720°', '900°'], answer: 1 },
            { id: 'm4', q: 'The value of log₁₀(1000) is?', options: ['1', '2', '3', '0'], answer: 2 },
            { id: 'm5', q: 'What is the area of a circle with radius 7?', options: ['49π', '14π', '21π', '7π'], answer: 0 },
            { id: 'm6', q: 'The roots of x² - 9 = 0 are?', options: ['±3', '±9', '3, 9', 'Only 3'], answer: 0 },
            { id: 'm7', q: 'What is the value of 0!', options: ['0', '1', 'Undefined', 'Infinity'], answer: 1 },
            { id: 'm8', q: 'If f(x) = x², then f\'(2) = ?', options: ['2', '4', '8', '16'], answer: 1 },
            { id: 'm9', q: 'A right triangle has sides 3 and 4, hypotenuse = ?', options: ['5', '6', '7', '8'], answer: 0 },
            { id: 'm10', q: 'Simplify: (x³)² = ?', options: ['x⁶', 'x⁵', 'x³', 'x²'], answer: 0 },
            { id: 'm11', q: 'If a/b = 2 and b = 4, then a = ?', options: ['2', '4', '6', '8'], answer: 3 }
        ]
    },
    {
        topic: 'Computer Science',
        id: 'cs',
        questions: [
            { id: 'cs1', q: 'What does CPU stand for?', options: ['Central Process Unit', 'Central Processing Unit', 'Computer Personal Unit', 'Central Processor Utility'], answer: 1 },
            { id: 'cs2', q: 'Which language is directly understood by the computer?', options: ['C', 'Assembly', 'Machine Language', 'Java'], answer: 2 },
            { id: 'cs3', q: 'The first mechanical computer was invented by?', options: ['Charles Babbage', 'Alan Turing', 'John von Neumann', 'Bill Gates'], answer: 0 },
            { id: 'cs4', q: 'What is the brain of the computer?', options: ['RAM', 'CPU', 'Hard Disk', 'GPU'], answer: 1 },
            { id: 'cs5', q: 'Which device is used for input?', options: ['Printer', 'Keyboard', 'Monitor', 'Speaker'], answer: 1 },
            { id: 'cs6', q: 'What is the smallest unit of data in a computer?', options: ['Byte', 'Bit', 'Nibble', 'Word'], answer: 1 },
            { id: 'cs7', q: 'Which is volatile memory?', options: ['ROM', 'Hard Disk', 'RAM', 'SSD'], answer: 2 },
            { id: 'cs8', q: 'HTTP stands for?', options: ['HyperText Transfer Protocol', 'HighText Transfer Protocol', 'Hyper Transfer Text Protocol', 'None'], answer: 0 },
            { id: 'cs9', q: 'Binary number 1010 is equal to decimal?', options: ['8', '9', '10', '12'], answer: 2 },
            { id: 'cs10', q: 'Which storage is non-volatile?', options: ['RAM', 'ROM', 'Cache', 'Registers'], answer: 1 },
            { id: 'cs11', q: 'Which part of CPU performs calculations?', options: ['CU', 'ALU', 'Registers', 'Memory'], answer: 1 }
        ]
    },
    {
        topic: 'IQ',
        id: 'iq',
        questions: [
            { id: 'iq1', q: 'What comes next? 2, 4, 8, 16, ?', options: ['18', '24', '32', '64'], answer: 2 },
            { id: 'iq2', q: 'If ALL = 25, CAT = 24, then DOG = ?', options: ['26', '23', '22', '21'], answer: 1 },
            { id: 'iq3', q: 'Which is odd one out: Apple, Mango, Carrot, Banana?', options: ['Apple', 'Mango', 'Carrot', 'Banana'], answer: 2 },
            { id: 'iq4', q: 'If 5x = 20, x = ?', options: ['2', '3', '4', '5'], answer: 2 },
            { id: 'iq5', q: 'Mirror image of 27 is?', options: ['72', '27', 'None', 'Both'], answer: 0 },
            { id: 'iq6', q: 'Which number is missing? 1, 4, 9, 16, ?', options: ['20', '24', '25', '36'], answer: 2 },
            { id: 'iq7', q: 'Find the next: A, C, E, G, ?', options: ['H', 'I', 'J', 'K'], answer: 2 },
            { id: 'iq8', q: 'Which is heavier: 1kg cotton or 1kg iron?', options: ['Cotton', 'Iron', 'Both same', 'None'], answer: 2 },
            { id: 'iq9', q: 'What is 15% of 200?', options: ['20', '25', '30', '35'], answer: 2 },
            { id: 'iq10', q: 'Which is smallest: 0.2, 0.02, 0.222, 0.12?', options: ['0.2', '0.02', '0.222', '0.12'], answer: 1 },
            { id: 'iq11', q: 'Cube root of 27?', options: ['2', '3', '4', '5'], answer: 1 }
        ]
    },
    {
        topic: 'English',
        id: 'english',
        questions: [
            { id: 'en1', q: 'Choose the correct spelling:', options: ['Accomodate', 'Acommodate', 'Accommodate', 'Acommodete'], answer: 2 },
            { id: 'en2', q: 'Synonym of "Abundant"?', options: ['Plentiful', 'Rare', 'Few', 'Scarce'], answer: 0 },
            { id: 'en3', q: 'Antonym of "Expand"?', options: ['Increase', 'Enlarge', 'Shrink', 'Grow'], answer: 2 },
            { id: 'en4', q: 'He ___ a book.', options: ['Read', 'Reads', 'Reading', 'Reeds'], answer: 1 },
            { id: 'en5', q: 'Plural of "Mouse"?', options: ['Mouses', 'Mice', 'Mouse', 'Mices'], answer: 1 },
            { id: 'en6', q: 'Past tense of "Go"?', options: ['Went', 'Gone', 'Goes', 'Goed'], answer: 0 },
            { id: 'en7', q: 'Find the correct sentence:', options: ['She go to school.', 'She goes to school.', 'She going to school.', 'She gone to school.'], answer: 1 },
            { id: 'en8', q: 'Fill: "He is taller ___ me."', options: ['Then', 'Than', 'From', 'To'], answer: 1 },
            { id: 'en9', q: 'Opposite of "Hot"?', options: ['Cold', 'Cool', 'Warm', 'Chill'], answer: 0 },
            { id: 'en10', q: 'Choose correct: "I have ___ apple."', options: ['a', 'an', 'the', 'no'], answer: 1 },
            { id: 'en11', q: 'Meaning of "Transparent"?', options: ['Clear', 'Dirty', 'Blurred', 'Dark'], answer: 0 }
        ]
    },
    {
        topic: 'Pakistan Studies',
        id: 'pst',
        questions: [
            { id: 'ps1', q: 'When did Pakistan come into being?', options: ['14 August 1947', '15 August 1947', '14 August 1948', '15 August 1948'], answer: 0 },
            { id: 'ps2', q: 'Who was the first Governor General of Pakistan?', options: ['Liaquat Ali Khan', 'Quaid-e-Azam', 'Khawaja Nazimuddin', 'Ayub Khan'], answer: 1 },
            { id: 'ps3', q: 'Which is the national flower of Pakistan?', options: ['Rose', 'Tulip', 'Jasmine', 'Sunflower'], answer: 2 },
            { id: 'ps4', q: 'National language of Pakistan?', options: ['Punjabi', 'Urdu', 'Sindhi', 'Pashto'], answer: 1 },
            { id: 'ps5', q: 'National animal of Pakistan?', options: ['Markhor', 'Lion', 'Horse', 'Leopard'], answer: 0 },
            { id: 'ps6', q: 'National poet of Pakistan?', options: ['Allama Iqbal', 'Faiz Ahmed Faiz', 'Ahmad Faraz', 'Josh Malihabadi'], answer: 0 },
            { id: 'ps7', q: 'When was first constitution enforced?', options: ['1956', '1958', '1962', '1973'], answer: 0 },
            { id: 'ps8', q: 'Which city is called "Manchester of Pakistan"?', options: ['Faisalabad', 'Karachi', 'Lahore', 'Multan'], answer: 0 },
            { id: 'ps9', q: 'Which is the highest peak of Pakistan?', options: ['Nanga Parbat', 'K2', 'Tirich Mir', 'Broad Peak'], answer: 1 },
            { id: 'ps10', q: 'National bird of Pakistan?', options: ['Chukar Partridge', 'Pigeon', 'Parrot', 'Peacock'], answer: 0 },
            { id: 'ps11', q: 'First Prime Minister of Pakistan?', options: ['Quaid-e-Azam', 'Liaquat Ali Khan', 'Khawaja Nazimuddin', 'Ayub Khan'], answer: 1 }
        ]
    }
];

let state = {
    topicIndex: null,
    current: 0,
    answers: {} // qid -> selected index
};

// DOM refs
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

function showStart() {
    startScreen.classList.remove('hidden');
    topicsScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
}
function showTopics() {
    startScreen.classList.add('hidden');
    topicsScreen.classList.remove('hidden');
    quizScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
}
function showQuiz() {
    startScreen.classList.add('hidden');
    topicsScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    resultsScreen.classList.add('hidden');
}
function showResultsScreen() {
    startScreen.classList.add('hidden');
    topicsScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
}

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

function startTopic(i) {
    state.topicIndex = i;
    state.current = 0;
    state.answers = {};
    showQuiz();
    renderQuestion();
    updateAnsweredCount();
}

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
        btn.className = 'p-3 rounded-lg border w-full text-left';
        if (state.answers[q.id] === idx) {
            btn.classList.add('bg-black', 'text-white', 'option-selected');
        }
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

prevBtn.addEventListener('click', () => {
    if (state.current > 0) {
        state.current--;
        renderQuestion();
    }
});

nextBtn.addEventListener('click', () => {
    const topic = QUIZ_DATA[state.topicIndex];
    if (!topic) return;
    if (state.current < topic.questions.length - 1) {
        state.current++;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        renderQuestion();
    } else {
        showResults();
    }
});
// Fix 3: Moved this event listener out of the nextBtn listener
startButton.addEventListener('click', () => {
    renderTopics();
    showTopics();
});

clearBtn.addEventListener('click', () => {
    const topic = QUIZ_DATA[state.topicIndex];
    if (!topic) return;
    const qid = topic.questions[state.current].id;
    delete state.answers[qid];
    renderQuestion();
    updateAnsweredCount();
});

quitTopics.addEventListener('click', () => {
    renderTopics();
    showTopics();
});

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
                                <div class="p-2 rounded ${i === correct ? 'correct' : ''} ${i === user && i !== correct ? 'incorrect' : ''}">
                                    <span class="font-mono w-6 inline-block mr-2">${String.fromCharCode(65 + i)}</span>
                                    <span>${opt}</span>
                                    ${i === correct ? '<span class="ml-2 text-green-600 font-bold">(Correct)</span>' : ''}
                                    ${i === user && i !== correct ? '<span class="ml-2 text-red-600 font-bold">(Your answer)</span>' : ''}
                                </div>
                            `).join('')}
                        </div>
                    `;
        resultsList.appendChild(block);
    });

    scoreVal.textContent = score;
    scoreTotal.textContent = topic.questions.length;
}

resultsBack.addEventListener('click', () => {
    renderTopics();
    showTopics();
});
retryBtn.addEventListener('click', () => {
    startTopic(state.topicIndex);
});

startButton.addEventListener('click', () => {
    renderTopics();
    showTopics();
});
backToStart.addEventListener('click', () => {
    showStart();
});

// Initialize
showStart();
