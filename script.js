// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Start screen elements (may be present in your HTML)
  const startScreen = document.getElementById("startScreen");
  const topicsScreen = document.getElementById("topicsScreen");
  const startBtn = document.getElementById("startBtn");

  // Core app elements
  const topicsEl = document.getElementById("topics");
  const quizArea = document.getElementById("quizArea");
  const topicTitle = document.getElementById("topicTitle");
  const qIndexEl = document.getElementById("qIndex");
  const qTotalEl = document.getElementById("qTotal");
  const qTotalEl2 = document.getElementById("qTotal2"); // optional
  const questionText = document.getElementById("questionText");
  const optionsList = document.getElementById("optionsList");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const clearBtn = document.getElementById("clearBtn");
  const answeredCountEl = document.getElementById("answeredCount"); // optional

  const resultsArea = document.getElementById("resultsArea");
  const resultsTopic = document.getElementById("resultsTopic");
  const resultsList = document.getElementById("resultsList");
  const scoreVal = document.getElementById("scoreVal");
  const scoreTotal = document.getElementById("scoreTotal");
  const backBtn = document.getElementById("backBtn");
  const retryBtn = document.getElementById("retryBtn");

  // Full quiz data: 5 topics × 11 questions = 55
  const QUIZ_DATA = [
    {
      topic: "General Knowledge",
      id: "gk",
      questions: [
        { id: "gk1", q: "Which treaty, signed in 1648, is widely considered to have established the modern system of sovereign states in Europe?", options: ["Treaty of Westphalia", "Treaty of Utrecht", "Treaty of Versailles", "Treaty of Tordesillas"], answer: 0 },
        { id: "gk2", q: "The Richter magnitude scale and the moment magnitude scale (Mw) differ most significantly in what way?", options: ["Mw is based on seismic moment and works for large quakes", "Richter uses energy release measured by moment", "Mw applies only to earthquakes before 1900", "Richter is logarithmic while Mw is linear"], answer: 0 },
        { id: "gk3", q: "Which civilisation built the city of Cahokia, noted for its large earthen mounds, near present-day St. Louis?", options: ["Mississippian culture", "Ancestral Puebloans", "Iroquoian Confederacy", "Hopewell tradition"], answer: 0 },
        { id: "gk4", q: "Which scientist proposed the concept of continental drift in 1912, prior to plate tectonic theory?", options: ["Alfred Wegener", "Arthur Holmes", "Harry Hess", "Vine & Matthews"], answer: 0 },
        { id: "gk5", q: "The Svalbard Global Seed Vault is located on which island and why is it placed there?", options: ["Spitsbergen — permafrost and political stability", "Greenland — proximity to research stations", "Iceland — geothermal stable temperatures", "Falklands — isolation and low seismicity"], answer: 0 },
        { id: "gk6", q: "Which economist introduced the idea of the \"invisible hand\" in market economies?", options: ["Adam Smith", "David Ricardo", "John Maynard Keynes", "Thomas Malthus"], answer: 0 },
        { id: "gk7", q: "Which international body was created by the 1947 General Agreement on Tariffs and Trade (GATT) successor in 1995?", options: ["World Trade Organization (WTO)", "International Monetary Fund (IMF)", "World Bank", "United Nations Conference on Trade and Development (UNCTAD)"], answer: 0 },
        { id: "gk8", q: "Which device, invented by Charles Babbage, is considered a direct mechanical precursor to modern programmable computers?", options: ["Analytical Engine", "Difference Engine", "Tabulating Machine", "Jacquard Loom"], answer: 0 },
        { id: "gk9", q: "Who wrote the 1859 work that transformed biology by proposing natural selection?", options: ["Charles Darwin", "Alfred Russel Wallace", "Gregor Mendel", "Jean-Baptiste Lamarck"], answer: 0 },
        { id: "gk10", q: "Which country’s legal system is the primary historical source of the common law tradition?", options: ["England", "France", "Germany", "Spain"], answer: 0 },
        { id: "gk11", q: "The Tethys Ocean existed between which two major landmasses in the Mesozoic?", options: ["Gondwana and Laurasia", "Pangaea and Rodinia", "Eurasia and Africa", "North America and South America"], answer: 0 }
      ]
    },
    {
      topic: "Islamiyat",
      id: "islamiyat",
      questions: [
        { id: "is1", q: "Which surah of the Qur'an is named after a battle that took place in the second year of Hijra and addresses rules on spoils of war and mutiny?", options: ["Al-Anfal", "Al-Fath", "At-Tawbah", "Al-Imran"], answer: 0 },
        { id: "is2", q: "Who was the last of the rightly-guided caliphs (Rashidun) according to Sunni tradition?", options: ["Ali ibn Abi Talib", "Uthman ibn Affan", "Muawiyah I", "Abu Bakr Siddiq"], answer: 0 },
        { id: "is3", q: "Which Islamic scholar compiled one of the earliest and most authoritative collections of hadith, Sahih al-Bukhari, in which century?", options: ["9th century CE", "7th century CE", "11th century CE", "13th century CE"], answer: 0 },
        { id: "is4", q: "In Quranic exegesis, the term \"Asbab al-Nuzul\" refers to what?", options: ["Circumstances/reasons of revelation", "Legal rulings derived from a verse", "Allegorical interpretations", "Compilation order of surahs"], answer: 0 },
        { id: "is5", q: "Which Arabic term refers to the prophetic biography and accounts of the Prophet Muhammad's life?", options: ["Sira", "Fiqh", "Tafsir", "Hadith"], answer: 0 },
        { id: "is6", q: "Which Islamic school of jurisprudence (madhhab) is historically dominant in the Indian subcontinent and parts of the Ottoman Empire?", options: ["Hanafi", "Maliki", "Shafi'i", "Hanbali"], answer: 0 },
        { id: "is7", q: "Which night is believed to be better than a thousand months according to the Quran?", options: ["Laylat al-Qadr", "Isra wa Miraj", "Laylat al-Bara'ah", "Laylat al-Raghaib"], answer: 0 },
        { id: "is8", q: "In Islamic theology, which attribute of God is described by the Arabic term \"Rahman\"?", options: ["Most Merciful", "All-Knowing", "All-Powerful", "Most Just"], answer: 0 },
        { id: "is9", q: "The treaty that the Prophet Muhammad concluded with the people of Medina, establishing mutual rights and responsibilities, is commonly called what?", options: ["The Constitution of Medina", "Treaty of Hudaybiyyah", "Pact of Aqabah", "Treaty of Hudaibiyyah"], answer: 0 },
        { id: "is10", q: "Which companion is famous for narrating the most hadiths after the Prophet (according to most counts)?", options: ["Abu Hurairah", "Aisha bint Abi Bakr", "Anas ibn Malik", "Abdullah ibn Abbas"], answer: 0 },
        { id: "is11", q: "Which early Islamic caliphate moved its capital to Damascus and oversaw major expansion into North Africa and Central Asia?", options: ["Umayyad Caliphate", "Abbasid Caliphate", "Rashidun Caliphate", "Fatimid Caliphate"], answer: 0 }
      ]
    },
    {
      topic: "Mathematics",
      id: "math",
      questions: [
        { id: "m1", q: "Let f(x)=x^x for x>0. What is f'(x) in simplest form?", options: ["x^x(ln x + 1)", "x^{x-1}(ln x + 1)", "x^x(1/x + 1)", "x^x ln x"], answer: 0 },
        { id: "m2", q: "If the matrix A = [[2,1],[1,2]] has eigenvalues λ1 and λ2, what are they?", options: ["3 and 1", "2 and 2", "1 and -1", "4 and 0"], answer: 0 },
        { id: "m3", q: "Solve for x: 2^(2x) = 8^(x+1) / 2.", options: ["x = 1", "x = 0", "x = -1", "x = 2"], answer: 0 },
        { id: "m4", q: "A sequence a_n satisfies a_{n+2} = 6 a_{n+1} - 9 a_n. If a_0=2 and a_1=6, find a_2.", options: ["18", "30", "54", "42"], answer: 0 },
        { id: "m5", q: "What is the sum of the reciprocals of the triangular numbers: sum_{n=1}^∞ 1/(n(n+1)/2)?", options: ["2", "1", "3/2", "4/3"], answer: 0 },
        { id: "m6", q: "If z is a complex root of z^2 + 1 = 0, what is z^7?", options: ["-i", "i", "1", "-1"], answer: 0 },
        { id: "m7", q: "Find the area enclosed by one loop of the polar curve r = 2 sin(3θ).", options: ["π/6", "π/3", "π/12", "π/2"], answer: 0 },
        { id: "m8", q: "Does the series sum_{n=1}^∞ (n!) / n^n converge or diverge?", options: ["Converges (by ratio/Stirling comparison)", "Diverges (terms don't go to zero)", "Diverges (p-test)", "Converges conditionally but not absolutely"], answer: 0 },
        { id: "m9", q: "What is the derivative of arctan(x) with respect to x?", options: ["1/(1+x^2)", "1/(1-x^2)", "1/x", "1/(1+x)"], answer: 0 },
        { id: "m10", q: "If p is a prime greater than 3, which of the following is always true about p^2 -1?", options: ["Divisible by 24", "Divisible by 16", "Prime", "Divisible by 12 but not 24"], answer: 0 },
        { id: "m11", q: "Solve for real x: ln(x) + ln(x-1) = 0.", options: ["x = (1+√5)/2", "x = (1-√5)/2", "x = 1", "No real solution"], answer: 0 }
      ]
    },
    {
      topic: "English",
      id: "english",
      questions: [
        { id: "e1", q: "Choose the option that best completes the sentence: \"Had I known of the complication, I ______ to consult a specialist.\"", options: ["would have chosen", "had chosen", "will have chosen", "would choose"], answer: 0 },
        { id: "e2", q: "Identify the sentence with a correct use of the subjunctive mood.", options: ["It is essential that she be present at once.", "She was that she be present at once.", "She is essential that she is present.", "It is essential that she was present."], answer: 0 },
        { id: "e3", q: "Which word is closest in meaning to \"obfuscate\"?", options: ["Confuse", "Illuminate", "Support", "Predict"], answer: 0 },
        { id: "e4", q: "Select the correctly punctuated sentence.", options: ["The committee — tired and divided — postponed the vote.", "The committee, tired and divided postponed the vote.", "The committee tired and divided — postponed the vote.", "The committee tired, and divided postponed the vote."], answer: 0 },
        { id: "e5", q: "Choose the option that best paraphrases: \"She deigned to help.\"", options: ["She reluctantly lowered herself to help.", "She eagerly rushed to help.", "She refused to help politely.", "She was proud to offer help."], answer: 0 },
        { id: "e6", q: "Which word is an antonym of \"laconic\"?", options: ["Verbose", "Terse", "Succinct", "Pithy"], answer: 0 },
        { id: "e7", q: "Choose the correct relative pronoun: \"The candidate, ______ resume I admired, failed to secure the post.\"", options: ["whose", "whom", "which", "that"], answer: 0 },
        { id: "e8", q: "Which sentence demonstrates parallel structure?", options: ["She likes reading, jogging, and to swim.", "She likes to read, jog, and swim.", "She likes reading, to jog, and swimming.", "She likes read, jogging, and to swim."], answer: 1 },
        { id: "e9", q: "Identify the passive voice version of: \"They will finish the project by Friday.\"", options: ["The project will be finished by Friday.", "The project will finish by Friday.", "The project is finished by Friday.", "By Friday, the project will finish."], answer: 0 },
        { id: "e10", q: "Pick the best word to complete the analogy: \"Harangue is to praise as lambaste is to ______.\"", options: ["criticize", "applaud", "ignore", "observe"], answer: 1 },
        { id: "e11", q: "Which sentence contains a correct idiomatic expression?", options: ["He kicked the bucket last year (meaning: died).", "He kicked the habit last year (meaning: died).", "He kicked the ball last year (idiom for quitting).", "He kicked the habit last year (meaning: started a habit)."], answer: 0 }
      ]
    },
    {
      topic: "IQ (Computer)",
      id: "iq",
      questions: [
        { id: "iq1", q: "Which data structure guarantees O(1) average-time complexity for insertion, deletion, and lookup (amortized), assuming a good hash function?", options: ["Hash table", "Binary search tree", "Linked list", "Heap"], answer: 0 },
        { id: "iq2", q: "In a directed acyclic graph (DAG), the algorithm to order vertices so that for every directed edge u→v, u comes before v is called what?", options: ["Topological sort", "Dijkstra's algorithm", "Kruskal's algorithm", "Bellman-Ford algorithm"], answer: 0 },
        { id: "iq3", q: "Which complexity class contains decision problems for which a given solution can be verified in polynomial time?", options: ["NP", "P", "PSPACE", "EXP"], answer: 0 },
        { id: "iq4", q: "Which sorting algorithm has worst-case O(n log n) time and is typically implemented with divide-and-conquer but requires careful pivot selection?", options: ["Merge sort", "Quick sort (with median-of-three)", "Heap sort", "Bubble sort"], answer: 1 },
        { id: "iq5", q: "Which of the following best describes a red-black tree?", options: ["A self-balancing binary search tree with color properties ensuring height is O(log n)", "An unbalanced BST optimized for insertions", "A heap variant using two colors", "A B-tree specialized for disk storage"], answer: 0 },
        { id: "iq6", q: "If a program has time complexity O(n^2) and you double the input size n, roughly how many times longer will it take?", options: ["About 4 times", "About 2 times", "About same", "About 8 times"], answer: 0 },
        { id: "iq7", q: "Which logic gate is functionally complete (i.e., alone can be used to implement any Boolean function)?", options: ["NAND", "AND", "OR", "XOR"], answer: 0 },
        { id: "iq8", q: "In relational databases, normal form that removes transitive dependencies and requires that non-key attributes are dependent only on the primary key is called?", options: ["Third Normal Form (3NF)", "First Normal Form (1NF)", "Boyce-Codd Normal Form (BCNF)", "Second Normal Form (2NF)"], answer: 0 },
        { id: "iq9", q: "Which protocol is connectionless and operates on top of IP, often used for streaming and DNS?", options: ["UDP", "TCP", "HTTP", "FTP"], answer: 0 },
        { id: "iq10", q: "Which model divides computer architecture into five functional components: input, output, memory, control unit, and arithmetic logic unit?", options: ["Von Neumann architecture", "Harvard architecture", "Turing machine model", "Godel architecture"], answer: 0 },
        { id: "iq11", q: "Which of the following describes the halting problem?", options: ["An undecidable problem — no algorithm can determine for all programs whether they halt", "A problem solvable in polynomial time", "A problem solvable only by quantum computers", "A practical debugging tool for compilers"], answer: 0 }
      ]
    }
  ];

  // App state
  let state = {
    topicIndex: null,
    current: 0,
    answers: {} // qid -> selected index
  };

  // If there is a Start button, show topics screen after click
  if (startBtn && startScreen && topicsScreen) {
    startBtn.addEventListener("click", () => {
      startScreen.classList.add("hidden");
      topicsScreen.classList.remove("hidden");
    });
  } else {
    // If no start screen present, ensure topics area is visible
    if (topicsEl) topicsEl.classList.remove("hidden");
  }

  // Render topic buttons
  function renderTopics() {
    if (!topicsEl) return;
    topicsEl.innerHTML = "";
    QUIZ_DATA.forEach((t, i) => {
      const btn = document.createElement("button");
      btn.className = "p-4 border rounded-xl text-left hover:shadow-md transition";
      btn.innerHTML = `<div class="text-lg font-semibold">${t.topic}</div><div class="text-sm text-gray-600">${t.questions.length} questions</div>`;
      btn.addEventListener("click", () => startTopic(i));
      topicsEl.appendChild(btn);
    });
  }

  // Start a topic
  function startTopic(index) {
    state.topicIndex = index;
    state.current = 0;
    state.answers = {};
    // hide topics / results, show quiz
    if (topicsScreen) topicsScreen.classList.add("hidden");
    if (topicsEl) topicsEl.classList.add("hidden");
    if (resultsArea) resultsArea.classList.add("hidden");
    if (quizArea) quizArea.classList.remove("hidden");
    renderQuestion();
    updateAnsweredCount();
  }

  // Render question & options
  function renderQuestion() {
    const topic = QUIZ_DATA[state.topicIndex];
    if (!topic || !questionText || !optionsList) return;
    const qObj = topic.questions[state.current];

    topicTitle && (topicTitle.textContent = topic.topic);
    qIndexEl && (qIndexEl.textContent = state.current + 1);
    qTotalEl && (qTotalEl.textContent = topic.questions.length);
    qTotalEl2 && (qTotalEl2.textContent = topic.questions.length);
    questionText.textContent = qObj.q;

    // options
    optionsList.innerHTML = "";
    qObj.options.forEach((opt, idx) => {
      const qid = qObj.id;
      const selected = state.answers[qid] === idx;
      const optBtn = document.createElement("button");
      optBtn.type = "button";
      optBtn.className = `p-3 text-left rounded-lg border flex items-center gap-3 w-full ${selected ? "bg-blue-50 border-blue-300 option-selected" : "hover:bg-gray-50"}`;
      optBtn.innerHTML = `<div class="w-6 font-mono">${String.fromCharCode(65 + idx)}</div><div class="flex-1">${opt}</div>`;
      optBtn.addEventListener("click", () => {
        state.answers[qid] = idx;
        renderQuestion();
        updateAnsweredCount();
      });
      optionsList.appendChild(optBtn);
    });

    // prev/next state
    if (prevBtn) prevBtn.disabled = state.current === 0;
    if (nextBtn) nextBtn.textContent = state.current < topic.questions.length - 1 ? "Next" : "Finish";
  }

  // Navigation handlers
  if (prevBtn) prevBtn.addEventListener("click", () => {
    if (state.current > 0) {
      state.current--;
      renderQuestion();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  if (nextBtn) nextBtn.addEventListener("click", () => {
    const topic = QUIZ_DATA[state.topicIndex];
    if (!topic) return;
    if (state.current < topic.questions.length - 1) {
      state.current++;
      renderQuestion();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      showResults();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  if (clearBtn) clearBtn.addEventListener("click", () => {
    const topic = QUIZ_DATA[state.topicIndex];
    if (!topic) return;
    const qid = topic.questions[state.current].id;
    delete state.answers[qid];
    renderQuestion();
    updateAnsweredCount();
  });

  // answered count update (optional)
  function updateAnsweredCount() {
    if (!answeredCountEl) return;
    const count = Object.keys(state.answers).filter(k => state.answers[k] !== undefined && state.answers[k] !== null).length;
    answeredCountEl.textContent = count;
  }

  // Show results
  function showResults() {
    const topic = QUIZ_DATA[state.topicIndex];
    if (!topic) return;
    if (quizArea) quizArea.classList.add("hidden");
    if (resultsArea) resultsArea.classList.remove("hidden");

    resultsTopic && (resultsTopic.textContent = topic.topic);
    resultsList && (resultsList.innerHTML = "");
    let score = 0;

    topic.questions.forEach((q, idx) => {
      const user = state.answers[q.id];
      const correct = q.answer;
      if (user === correct) score++;

      // build per-question block
      const block = document.createElement("div");
      block.className = "p-3 border rounded-md";

      const qTitle = document.createElement("div");
      qTitle.className = "font-medium";
      qTitle.textContent = `${idx + 1}. ${q.q}`;
      block.appendChild(qTitle);

      const optsWrap = document.createElement("div");
      optsWrap.className = "mt-2 grid grid-cols-1 md:grid-cols-2 gap-2";
      q.options.forEach((opt, i) => {
        const optDiv = document.createElement("div");
        let classes = "p-2 rounded ";
        if (i === correct) classes += "bg-green-50 border border-green-200";
        if (i === user && i !== correct) classes += " bg-red-50 border border-red-200";
        optDiv.className = classes;
        optDiv.innerHTML = `<div class="flex items-center gap-3"><div class="w-6 font-mono">${String.fromCharCode(65 + i)}</div><div>${opt}</div></div>`;
        optsWrap.appendChild(optDiv);
      });
      block.appendChild(optsWrap);

      const foot = document.createElement("div");
      foot.className = "mt-2 text-sm text-gray-600";
      foot.textContent = `Your answer: ${user === undefined || user === null ? "—" : String.fromCharCode(65 + user)} • Correct: ${String.fromCharCode(65 + correct)}`;
      block.appendChild(foot);

      resultsList.appendChild(block);
    });

    scoreVal && (scoreVal.textContent = score);
    scoreTotal && (scoreTotal.textContent = topic.questions.length);
  }

  // Back & Retry
  if (backBtn) backBtn.addEventListener("click", () => {
    if (resultsArea) resultsArea.classList.add("hidden");
    if (topicsScreen) topicsScreen.classList.remove("hidden");
    if (topicsEl) topicsEl.classList.remove("hidden");
    // optionally reset to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  if (retryBtn) retryBtn.addEventListener("click", () => {
    // restart same topic
    if (state.topicIndex !== null) startTopic(state.topicIndex);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Initialize
  renderTopics();
});
