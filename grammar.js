// Grammar path: 28 topics from PrepScholar's SAT Grammar Rules You Must Know (Part 1, 9 rules) and The Complete Guide to SAT Grammar Rules (remaining Part 2 topics). Rule text and official before/after examples follow those guides; practice questions are original.
const GRAMMAR = [
  {
    "id": "tense",
    "part": 1,
    "source": "A#1",
    "title": "Keep verb tenses consistent",
    "rule": "Keep verbs consistent in tense or form throughout a sentence. Surrounding sentences can provide context clues for the proper tense. Shift tense only when the sentence signals a real change in time.",
    "note": "The main idea is to keep the same tense as the rest of the sentence: if it is in the past, stay in the past; if it is in the present, stay in the present.\n\nHad + verb (past perfect) means it happened before another past event: She had left before he arrived.\n\nHas/have + verb (present perfect) means it started in the past and is still true or still going on now: She has lived here for 3 years.",
    "trap": "A tense that sounds fine alone but clashes with another verb in the sentence or with a time clue such as \"last week\" or \"in the future.\"",
    "before": "Last week, Frank rented a car and drives to Las Vegas.",
    "after": "Last week, Frank rented a car and drove to Las Vegas.",
    "qs": [
      {
        "q": "Last week, Frank rented a car and ___ to Las Vegas.",
        "o": [
          "drives",
          "drove",
          "is driving",
          "will drive"
        ],
        "a": 1,
        "why": "\"Last week\" and \"rented\" place the action in the past, so \"drove\" keeps the tense consistent.",
        "wx": [
          "\"drives\" is simple present, but this sentence needs simple past to stay consistent with its time frame.",
          "",
          "\"is driving\" is present progressive (is/are + -ing), but this sentence needs simple past to stay consistent with its time frame.",
          "\"will drive\" is future tense, but this sentence needs simple past to stay consistent with its time frame."
        ]
      },
      {
        "q": "Trenton lives in a rural area. He ___ the peace and quiet.",
        "o": [
          "enjoyed",
          "enjoys",
          "had enjoyed",
          "will have enjoyed"
        ],
        "a": 1,
        "why": "The first sentence is in the present (\"lives\"), and nothing signals a time change, so \"enjoys\" stays in the present.",
        "wx": [
          "\"enjoyed\" is simple past, but this sentence needs simple present to stay consistent with its time frame.",
          "",
          "\"had enjoyed\" is past perfect (had + verb), but this sentence needs simple present to stay consistent with its time frame.",
          "\"will have enjoyed\" is future perfect (will have + verb), but this sentence needs simple present to stay consistent with its time frame."
        ]
      },
      {
        "q": "In 1998, the engineers ___ a bridge that still carries traffic today.",
        "o": [
          "build",
          "built",
          "have built",
          "will build"
        ],
        "a": 1,
        "why": "\"In 1998\" is a finished past time, so simple past \"built\" is required.",
        "wx": [
          "\"build\" is simple present, but this sentence needs simple past to stay consistent with its time frame.",
          "",
          "\"have built\" is present perfect (has/have + verb), but this sentence needs simple past to stay consistent with its time frame.",
          "\"will build\" is future tense, but this sentence needs simple past to stay consistent with its time frame."
        ]
      },
      {
        "q": "Since the library reopened, attendance ___ every month.",
        "o": [
          "rose",
          "rises",
          "has risen",
          "had risen"
        ],
        "a": 2,
        "why": "\"Since\" marks an action that started in the past and continues up to now, which takes present perfect \"has risen.\"",
        "wx": [
          "\"rose\" does not keep the verb tense consistent with the rest of the sentence.",
          "\"rises\" is simple present, but this sentence needs present perfect (has/have + verb) to stay consistent with its time frame.",
          "",
          "\"had risen\" is past perfect (had + verb), but this sentence needs present perfect (has/have + verb) to stay consistent with its time frame."
        ]
      },
      {
        "q": "Every morning the bakers start the ovens and ___ the first loaves.",
        "o": [
          "prepared",
          "prepare",
          "had prepared",
          "will have prepared"
        ],
        "a": 1,
        "why": "\"Every morning\" and \"start\" are present habitual, so \"prepare\" should match.",
        "wx": [
          "\"prepared\" is simple past, which does not match the time already set in the sentence.",
          "",
          "\"had prepared\" is past perfect (had + verb), which does not match the time already set in the sentence.",
          "\"will have prepared\" is future perfect (will have + verb), which does not match the time already set in the sentence."
        ]
      },
      {
        "q": "If the pace of technological change continues, in the future we ___ self-driving cars.",
        "o": [
          "ride",
          "rode",
          "had ridden",
          "will ride"
        ],
        "a": 3,
        "why": "\"In the future\" signals a real time change from the present \"continues,\" so \"will ride\" is required.",
        "wx": [
          "\"ride\" does not keep the verb tense consistent with the rest of the sentence.",
          "\"rode\" does not keep the verb tense consistent with the rest of the sentence.",
          "\"had ridden\" is past perfect (had + verb), but this sentence needs future tense to stay consistent with its time frame.",
          ""
        ]
      },
      {
        "q": "Because the patient's arteries are badly clogged, the team ___ to check for other risks.",
        "o": [
          "had",
          "has",
          "will have had",
          "was having"
        ],
        "a": 1,
        "why": "\"Are\" is present, and the consequence is also present, so \"has\" keeps the time consistent.",
        "wx": [
          "\"had\" does not keep the verb tense consistent with the rest of the sentence.",
          "",
          "\"will have had\" is future perfect (will have + verb), but this sentence needs simple present to stay consistent with its time frame.",
          "\"was having\" is past progressive (was/were + -ing), but this sentence needs simple present to stay consistent with its time frame."
        ]
      },
      {
        "q": "Even though office hours have been over for some time, the professor and her student ___ their work.",
        "o": [
          "are continuing",
          "were continuing",
          "had continued",
          "continued"
        ],
        "a": 0,
        "why": "\"Have been\" is present perfect; the work is still going on, so \"are continuing\" stays in the present time frame.",
        "wx": [
          "",
          "\"were continuing\" is past progressive (was/were + -ing), but this sentence needs present progressive (is/are + -ing) to stay consistent with its time frame.",
          "\"had continued\" is past perfect (had + verb), but this sentence needs present progressive (is/are + -ing) to stay consistent with its time frame.",
          "\"continued\" is simple past, but this sentence needs present progressive (is/are + -ing) to stay consistent with its time frame."
        ]
      },
      {
        "q": "Yesterday the committee met, reviewed the draft, and ___ a vote.",
        "o": [
          "takes",
          "took",
          "is taking",
          "has taken"
        ],
        "a": 1,
        "why": "The sequence begins with \"Yesterday\" and two past verbs, so \"took\" must stay in the past.",
        "wx": [
          "\"takes\" is simple present, but this sentence needs simple past to stay consistent with its time frame.",
          "",
          "\"is taking\" is present progressive (is/are + -ing), but this sentence needs simple past to stay consistent with its time frame.",
          "\"has taken\" is present perfect (has/have + verb), but this sentence needs simple past to stay consistent with its time frame."
        ]
      },
      {
        "q": "Water ___ at 100 degrees Celsius at standard pressure.",
        "o": [
          "boiled",
          "had boiled",
          "boils",
          "will have boiled"
        ],
        "a": 2,
        "why": "Statements of general fact take the simple present: \"boils.\"",
        "wx": [
          "\"boiled\" is simple past, but this sentence needs simple present to stay consistent with its time frame.",
          "\"had boiled\" is past perfect (had + verb), but this sentence needs simple present to stay consistent with its time frame.",
          "",
          "\"will have boiled\" is future perfect (will have + verb), but this sentence needs simple present to stay consistent with its time frame."
        ]
      },
      {
        "q": "By the time the doors opened, the fans ___ in line for hours.",
        "o": [
          "wait",
          "are waiting",
          "had waited",
          "have waited"
        ],
        "a": 2,
        "why": "The waiting happened before another past event (\"opened\"), so past perfect \"had waited\" is the right shift.",
        "wx": [
          "\"wait\" does not keep the verb tense consistent with the rest of the sentence.",
          "\"are waiting\" is present progressive (is/are + -ing), but this sentence needs past perfect (had + verb) to stay consistent with its time frame.",
          "",
          "\"have waited\" is present perfect (has/have + verb), but this sentence needs past perfect (had + verb) to stay consistent with its time frame."
        ]
      },
      {
        "q": "The club planted a garden last spring and ___ the herbs at the market.",
        "o": [
          "sells",
          "sold",
          "is selling",
          "has been selling"
        ],
        "a": 1,
        "why": "\"Last spring\" and \"planted\" are past, so \"sold\" stays in the past.",
        "wx": [
          "\"sells\" is simple present, but this sentence needs simple past to stay consistent with its time frame.",
          "",
          "\"is selling\" is present progressive (is/are + -ing), but this sentence needs simple past to stay consistent with its time frame.",
          "\"has been selling\" is present perfect progressive, but this sentence needs simple past to stay consistent with its time frame."
        ]
      }
    ],
    "bank": [
      {
        "q": "She lives downtown now, but ten years ago she ___ in a small village.",
        "o": [
          "lives",
          "lived",
          "is living",
          "has lived"
        ],
        "a": 1,
        "why": "\"Ten years ago\" is a finished past time, so the tense should shift to \"lived.\"",
        "wx": [
          "\"lives\" is simple present, but this sentence needs simple past to stay consistent with its time frame.",
          "",
          "\"is living\" is present progressive (is/are + -ing), but this sentence needs simple past to stay consistent with its time frame.",
          "\"has lived\" is present perfect (has/have + verb), but this sentence needs simple past to stay consistent with its time frame."
        ]
      },
      {
        "q": "The report notes that the river ___ the valley each spring.",
        "o": [
          "flooded",
          "floods",
          "had flooded",
          "will have flooded"
        ],
        "a": 1,
        "why": "A recurring fact in a present-tense report takes simple present \"floods.\"",
        "wx": [
          "\"flooded\" is simple past, but this sentence needs simple present to stay consistent with its time frame.",
          "",
          "\"had flooded\" is past perfect (had + verb), but this sentence needs simple present to stay consistent with its time frame.",
          "\"will have flooded\" is future perfect (will have + verb), but this sentence needs simple present to stay consistent with its time frame."
        ]
      },
      {
        "q": "After she had finished the lab, she ___ her results to the class.",
        "o": [
          "presents",
          "presented",
          "is presenting",
          "has presented"
        ],
        "a": 1,
        "why": "\"Had finished\" sets up a later past action, so \"presented\" is simple past.",
        "wx": [
          "\"presents\" is simple present, but this sentence needs simple past to stay consistent with its time frame.",
          "",
          "\"is presenting\" is present progressive (is/are + -ing), but this sentence needs simple past to stay consistent with its time frame.",
          "\"has presented\" is present perfect (has/have + verb), but this sentence needs simple past to stay consistent with its time frame."
        ]
      },
      {
        "q": "Tomorrow the team ___ the new schedule before posting it in the hall.",
        "o": [
          "announced",
          "announces",
          "will announce",
          "had announced"
        ],
        "a": 2,
        "why": "\"Tomorrow\" requires the future; \"will announce\" matches a planned future event.",
        "wx": [
          "\"announced\" is simple past, but this sentence needs future tense to stay consistent with its time frame.",
          "\"announces\" is simple present, but this sentence needs future tense to stay consistent with its time frame.",
          "",
          "\"had announced\" is past perfect (had + verb), but this sentence needs future tense to stay consistent with its time frame."
        ]
      },
      {
        "q": "While the orchestra was tuning, the conductor ___ the score.",
        "o": [
          "reviews",
          "reviewed",
          "has reviewed",
          "will review"
        ],
        "a": 1,
        "why": "\"Was tuning\" is past continuous; the simultaneous action should be past: \"reviewed.\"",
        "wx": [
          "\"reviews\" is simple present, but this sentence needs simple past to stay consistent with its time frame.",
          "",
          "\"has reviewed\" is present perfect (has/have + verb), but this sentence needs simple past to stay consistent with its time frame.",
          "\"will review\" is future tense, but this sentence needs simple past to stay consistent with its time frame."
        ]
      },
      {
        "q": "From 2010 until last year, the shop ___ only on weekdays.",
        "o": [
          "opens",
          "opened",
          "is opening",
          "will open"
        ],
        "a": 1,
        "why": "The time span ended \"last year,\" so simple past \"opened\" is required.",
        "wx": [
          "\"opens\" is simple present, but this sentence needs simple past to stay consistent with its time frame.",
          "",
          "\"is opening\" is present progressive (is/are + -ing), but this sentence needs simple past to stay consistent with its time frame.",
          "\"will open\" is future tense, but this sentence needs simple past to stay consistent with its time frame."
        ]
      }
    ]
  },
  {
    "id": "sva",
    "part": 1,
    "source": "A#2",
    "title": "Subjects and verbs must agree",
    "rule": "Subjects and verbs must agree: use a singular verb with a singular subject and a plural verb with a plural subject. A phrase may separate the subject from the verb; a subject can never be part of a prepositional phrase. Collective nouns are treated as singular. In \"there is/are,\" the verb agrees with the real subject that follows.",
    "trap": "Matching the verb to a nearby noun in a prepositional phrase instead of to the real subject, or treating a collective noun as plural.",
    "before": "The members of the committee meets every Tuesday.",
    "after": "The members of the committee meet every Tuesday.",
    "qs": [
      {
        "q": "High school students ___ learning grammar rules.",
        "o": [
          "loves",
          "love",
          "is loving",
          "has loved"
        ],
        "a": 1,
        "why": "The subject \"students\" is plural, so the verb must be the plural \"love.\"",
        "wx": [
          "\"loves\" is singular, but the true subject is plural, so the verb must be plural.",
          "",
          "\"is loving\" is singular, but the true subject is plural, so the verb must be plural.",
          "\"has loved\" is singular, but the true subject is plural, so the verb must be plural."
        ]
      },
      {
        "q": "The members of the committee ___ every Tuesday.",
        "o": [
          "meets",
          "meet",
          "is meeting",
          "has met"
        ],
        "a": 1,
        "why": "The subject is \"members,\" not \"committee.\" \"Members\" is plural, so \"meet\" agrees.",
        "wx": [
          "\"meets\" is singular, but the true subject is plural, so the verb must be plural.",
          "",
          "\"is meeting\" is singular, but the true subject is plural, so the verb must be plural.",
          "\"has met\" is singular, but the true subject is plural, so the verb must be plural."
        ]
      },
      {
        "q": "A recent survey found that the furniture in most homes ___ made of wood.",
        "o": [
          "are",
          "is",
          "were",
          "have been"
        ],
        "a": 1,
        "why": "\"Furniture\" is a singular mass noun; ignore \"homes.\" The verb should be \"is.\"",
        "wx": [
          "\"are\" is plural, but the true subject is singular, so the verb must be singular.",
          "",
          "\"were\" is plural, but the true subject is singular, so the verb must be singular.",
          "\"have been\" is plural, but the true subject is singular, so the verb must be singular."
        ]
      },
      {
        "q": "There ___ a beaker and three pipettes on the top shelf.",
        "o": [
          "is",
          "are",
          "was",
          "has been"
        ],
        "a": 1,
        "why": "The real subject after \"there\" is the compound \"a beaker and three pipettes,\" which is plural, so \"are\" is required.",
        "wx": [
          "\"is\" is singular, but the true subject is plural, so the verb must be plural.",
          "",
          "\"was\" is singular, but the true subject is plural, so the verb must be plural.",
          "\"has been\" is singular, but the true subject is plural, so the verb must be plural."
        ]
      },
      {
        "q": "A crowd of people ___ getting in the way.",
        "o": [
          "keep",
          "keeps",
          "have kept",
          "are keeping"
        ],
        "a": 1,
        "why": "\"Crowd\" is a collective noun treated as singular, so \"keeps\" agrees.",
        "wx": [
          "\"keep\" does not agree with the true subject of the sentence. Skip any phrase between the subject and the verb.",
          "",
          "\"have kept\" is plural, but the true subject is singular, so the verb must be singular.",
          "\"are keeping\" is plural, but the true subject is singular, so the verb must be singular."
        ]
      },
      {
        "q": "The stack of letters ___ on the desk.",
        "o": [
          "sit",
          "sits",
          "are sitting",
          "have sat"
        ],
        "a": 1,
        "why": "The subject is \"stack,\" not \"letters.\" Singular \"sits\" agrees.",
        "wx": [
          "\"sit\" does not agree with the true subject of the sentence. Skip any phrase between the subject and the verb.",
          "",
          "\"are sitting\" is plural, but the true subject is singular, so the verb must be singular.",
          "\"have sat\" is plural, but the true subject is singular, so the verb must be singular."
        ]
      },
      {
        "q": "Each of the finalists ___ a short speech.",
        "o": [
          "give",
          "gives",
          "have given",
          "are giving"
        ],
        "a": 1,
        "why": "\"Each\" is singular, so \"gives\" is the agreeing verb.",
        "wx": [
          "\"give\" does not agree with the true subject of the sentence. Skip any phrase between the subject and the verb.",
          "",
          "\"have given\" is plural, but the true subject is singular, so the verb must be singular.",
          "\"are giving\" is plural, but the true subject is singular, so the verb must be singular."
        ]
      },
      {
        "q": "The news from the outposts ___ encouraging.",
        "o": [
          "are",
          "is",
          "were",
          "have been"
        ],
        "a": 1,
        "why": "\"News\" is singular, so \"is\" agrees.",
        "wx": [
          "\"are\" is plural, but the true subject is singular, so the verb must be singular.",
          "",
          "\"were\" is plural, but the true subject is singular, so the verb must be singular.",
          "\"have been\" is plural, but the true subject is singular, so the verb must be singular."
        ]
      },
      {
        "q": "Neither of the answers ___ correct.",
        "o": [
          "are",
          "is",
          "were",
          "have been"
        ],
        "a": 1,
        "why": "\"Neither\" is singular, so \"is\" is required.",
        "wx": [
          "\"are\" is plural, but the true subject is singular, so the verb must be singular.",
          "",
          "\"were\" is plural, but the true subject is singular, so the verb must be singular.",
          "\"have been\" is plural, but the true subject is singular, so the verb must be singular."
        ]
      },
      {
        "q": "The bouquet of roses ___ on the table.",
        "o": [
          "sit",
          "sits",
          "are sitting",
          "have sat"
        ],
        "a": 1,
        "why": "The subject is \"bouquet,\" not \"roses.\" Singular \"sits\" agrees.",
        "wx": [
          "\"sit\" does not agree with the true subject of the sentence. Skip any phrase between the subject and the verb.",
          "",
          "\"are sitting\" is plural, but the true subject is singular, so the verb must be singular.",
          "\"have sat\" is plural, but the true subject is singular, so the verb must be singular."
        ]
      },
      {
        "q": "Along the road ___ two old mile markers.",
        "o": [
          "stands",
          "stand",
          "is standing",
          "has stood"
        ],
        "a": 1,
        "why": "Inverted order: the subject is \"two old mile markers,\" which is plural, so \"stand\" agrees.",
        "wx": [
          "\"stands\" is singular, but the true subject is plural, so the verb must be plural.",
          "",
          "\"is standing\" is singular, but the true subject is plural, so the verb must be plural.",
          "\"has stood\" is singular, but the true subject is plural, so the verb must be plural."
        ]
      },
      {
        "q": "My brother, together with his friends, ___ soccer on Sundays.",
        "o": [
          "play",
          "plays",
          "have played",
          "are playing"
        ],
        "a": 1,
        "why": "The subject is \"brother.\" The phrase \"together with his friends\" does not make it plural, so \"plays\" agrees.",
        "wx": [
          "\"play\" does not agree with the true (plural) subject of the sentence.",
          "",
          "\"have played\" does not agree with the true (plural) subject of the sentence.",
          "\"are playing\" does not agree with the true (plural) subject of the sentence."
        ]
      }
    ],
    "bank": [
      {
        "q": "The group of tourists ___ a map at the station.",
        "o": [
          "study",
          "studies",
          "are studying",
          "have studied"
        ],
        "a": 1,
        "why": "\"Group\" is a collective noun treated as singular, so \"studies\" agrees.",
        "wx": [
          "\"study\" does not agree with the true subject of the sentence. Skip any phrase between the subject and the verb.",
          "",
          "\"are studying\" is plural, but the true subject is singular, so the verb must be singular.",
          "\"have studied\" is plural, but the true subject is singular, so the verb must be singular."
        ]
      },
      {
        "q": "There ___ several reasons to delay the vote.",
        "o": [
          "is",
          "are",
          "was",
          "has been"
        ],
        "a": 1,
        "why": "The real subject is \"several reasons,\" which is plural, so \"are\" is required.",
        "wx": [
          "\"is\" is singular, but the true subject is plural, so the verb must be plural.",
          "",
          "\"was\" is singular, but the true subject is plural, so the verb must be plural.",
          "\"has been\" is singular, but the true subject is plural, so the verb must be plural."
        ]
      },
      {
        "q": "The quality of these recordings ___ remarkable.",
        "o": [
          "are",
          "is",
          "were",
          "have been"
        ],
        "a": 1,
        "why": "The subject is \"quality,\" not \"recordings.\" Singular \"is\" agrees.",
        "wx": [
          "\"are\" is plural, but the true subject is singular, so the verb must be singular.",
          "",
          "\"were\" is plural, but the true subject is singular, so the verb must be singular.",
          "\"have been\" is plural, but the true subject is singular, so the verb must be singular."
        ]
      },
      {
        "q": "One of the windows ___ cracked.",
        "o": [
          "are",
          "is",
          "were",
          "have been"
        ],
        "a": 1,
        "why": "The subject is \"one,\" which is singular, so \"is\" agrees.",
        "wx": [
          "\"are\" is plural, but the true subject is singular, so the verb must be singular.",
          "",
          "\"were\" is plural, but the true subject is singular, so the verb must be singular.",
          "\"have been\" is plural, but the true subject is singular, so the verb must be singular."
        ]
      },
      {
        "q": "The players on the field ___ the coach's signal.",
        "o": [
          "sees",
          "see",
          "has seen",
          "is seeing"
        ],
        "a": 1,
        "why": "The subject is \"players,\" not \"field.\" Plural \"see\" agrees.",
        "wx": [
          "\"sees\" is singular, but the true subject is plural, so the verb must be plural.",
          "",
          "\"has seen\" is singular, but the true subject is plural, so the verb must be plural.",
          "\"is seeing\" is singular, but the true subject is plural, so the verb must be plural."
        ]
      },
      {
        "q": "Every book on those shelves ___ a nameplate.",
        "o": [
          "have",
          "has",
          "are having",
          "were having"
        ],
        "a": 1,
        "why": "\"Every book\" is singular, so \"has\" agrees.",
        "wx": [
          "\"have\" is plural, but the true subject is singular, so the verb must be singular.",
          "",
          "\"are having\" is plural, but the true subject is singular, so the verb must be singular.",
          "\"were having\" is plural, but the true subject is singular, so the verb must be singular."
        ]
      }
    ]
  },
  {
    "id": "pa",
    "part": 1,
    "source": "A#3",
    "title": "Pronouns must agree with their antecedents in number",
    "rule": "A plural pronoun must refer to a plural noun, and a singular pronoun must refer to a singular noun. Stay in the same person (I/you/he or she/they) throughout. Collective nouns such as \"corporation\" or \"committee\" take a singular pronoun (it/its).",
    "trap": "Using a plural pronoun such as \"their\" or \"them\" to refer to a single person, or switching from \"a person\" to \"you.\"",
    "before": "Kristin sold their car.",
    "after": "Kristin sold her car.",
    "qs": [
      {
        "q": "Kristin sold ___ car.",
        "o": [
          "their",
          "her",
          "them",
          "its"
        ],
        "a": 1,
        "why": "\"Kristin\" is a singular person, so the possessive pronoun must be singular \"her.\"",
        "wx": [
          "\"their\" is plural, but the noun it refers to is singular, so the pronoun must be singular too.",
          "",
          "\"them\" is plural, but the noun it refers to is singular, so the pronoun must be singular too.",
          "\"its\" does not fit a person. Use a singular personal pronoun such as \"her\"."
        ]
      },
      {
        "q": "If a person wants to succeed in corporate life, ___ have to know the rules of the game.",
        "o": [
          "you",
          "they",
          "she",
          "we"
        ],
        "a": 2,
        "why": "The antecedent \"a person\" is third-person singular, so \"she\" (or he) agrees in person and number; \"you\" switches person.",
        "wx": [
          "\"you\" switches person. The pronoun has to stay in the same person as the noun it refers to.",
          "\"they\" is plural, but the noun it refers to is singular, so the pronoun must be singular too.",
          "",
          "\"we\" switches person. The pronoun has to stay in the same person as the noun it refers to."
        ]
      },
      {
        "q": "Like ___ distant oceanic relatives the whales, hippopotamuses can alter their density to sink or float.",
        "o": [
          "its",
          "their",
          "his",
          "one's"
        ],
        "a": 1,
        "why": "The antecedent \"hippopotamuses\" is plural, so \"their\" agrees.",
        "wx": [
          "\"its\" is singular, but the noun it refers to is plural, so the pronoun must be plural.",
          "",
          "\"his\" is singular, but the noun it refers to is plural, so the pronoun must be plural.",
          "\"one's\" does not agree with its antecedent in number or person."
        ]
      },
      {
        "q": "After acquiring several companies, the corporation moved ___ headquarters.",
        "o": [
          "their",
          "its",
          "they",
          "them"
        ],
        "a": 1,
        "why": "\"Corporation\" is a collective noun treated as singular, so \"its\" agrees.",
        "wx": [
          "\"their\" is plural, but the noun it refers to is singular, so the pronoun must be singular too.",
          "",
          "\"they\" is plural, but the noun it refers to is singular, so the pronoun must be singular too.",
          "\"them\" is plural, but the noun it refers to is singular, so the pronoun must be singular too."
        ]
      },
      {
        "q": "Each student must submit ___ own draft.",
        "o": [
          "their",
          "his or her",
          "them",
          "they"
        ],
        "a": 1,
        "why": "\"Each student\" is singular, so \"his or her\" agrees in number. (SAT-style formal agreement.)",
        "wx": [
          "\"their\" is plural, but the noun it refers to is singular, so the pronoun must be singular too.",
          "",
          "\"them\" is plural, but the noun it refers to is singular, so the pronoun must be singular too.",
          "\"they\" is plural, but the noun it refers to is singular, so the pronoun must be singular too."
        ]
      },
      {
        "q": "The jurors announced ___ decision after two days.",
        "o": [
          "his",
          "her",
          "its",
          "their"
        ],
        "a": 3,
        "why": "\"Jurors\" is plural, so \"their\" is the matching pronoun.",
        "wx": [
          "\"his\" is singular, but the noun it refers to is plural, so the pronoun must be plural.",
          "\"her\" is singular, but the noun it refers to is plural, so the pronoun must be plural.",
          "\"its\" is singular, but the noun it refers to is plural, so the pronoun must be plural.",
          ""
        ]
      },
      {
        "q": "Neither restaurant is known for ___ desserts.",
        "o": [
          "their",
          "its",
          "them",
          "they"
        ],
        "a": 1,
        "why": "\"Neither restaurant\" is singular, so \"its\" agrees.",
        "wx": [
          "\"their\" is plural, but the noun it refers to is singular, so the pronoun must be singular too.",
          "",
          "\"them\" is plural, but the noun it refers to is singular, so the pronoun must be singular too.",
          "\"they\" is plural, but the noun it refers to is singular, so the pronoun must be singular too."
        ]
      },
      {
        "q": "If the applicants want an interview, ___ should call before Friday.",
        "o": [
          "he",
          "she",
          "they",
          "it"
        ],
        "a": 2,
        "why": "\"Applicants\" is plural, so \"they\" agrees.",
        "wx": [
          "\"he\" is singular, but the noun it refers to is plural, so the pronoun must be plural.",
          "\"she\" is singular, but the noun it refers to is plural, so the pronoun must be plural.",
          "",
          "\"it\" is singular, but the noun it refers to is plural, so the pronoun must be plural."
        ]
      },
      {
        "q": "The committee released ___ report on Monday.",
        "o": [
          "their",
          "its",
          "they",
          "them"
        ],
        "a": 1,
        "why": "\"Committee\" is a collective noun treated as singular, so \"its\" agrees.",
        "wx": [
          "\"their\" is plural, but the noun it refers to is singular, so the pronoun must be singular too.",
          "",
          "\"they\" is plural, but the noun it refers to is singular, so the pronoun must be singular too.",
          "\"them\" is plural, but the noun it refers to is singular, so the pronoun must be singular too."
        ]
      },
      {
        "q": "Everyone left ___ coat on the hook by the door.",
        "o": [
          "their",
          "his or her",
          "them",
          "they"
        ],
        "a": 1,
        "why": "\"Everyone\" is grammatically singular, so \"his or her\" agrees in number.",
        "wx": [
          "\"their\" is plural, but the noun it refers to is singular, so the pronoun must be singular too.",
          "",
          "\"them\" is plural, but the noun it refers to is singular, so the pronoun must be singular too.",
          "\"they\" is plural, but the noun it refers to is singular, so the pronoun must be singular too."
        ]
      },
      {
        "q": "The twins brought ___ cameras to the game.",
        "o": [
          "her",
          "his",
          "its",
          "their"
        ],
        "a": 3,
        "why": "\"Twins\" is plural, so \"their\" agrees.",
        "wx": [
          "\"her\" is singular, but the noun it refers to is plural, so the pronoun must be plural.",
          "\"his\" is singular, but the noun it refers to is plural, so the pronoun must be plural.",
          "\"its\" is singular, but the noun it refers to is plural, so the pronoun must be plural.",
          ""
        ]
      },
      {
        "q": "A doctor should explain the procedure so that ___ patients can ask questions.",
        "o": [
          "you",
          "they",
          "she",
          "we"
        ],
        "a": 2,
        "why": "Stay in third person with the singular \"doctor\": \"she\" (or he) agrees; \"you\" switches person. Wait - \"a doctor\" and \"her patients\" - yes she. But \"their patients\" would be number error if doctor is singular. Option they is wrong number. Good.",
        "wx": [
          "\"you\" switches person. The pronoun has to stay in the same person as the noun it refers to.",
          "\"they\" is plural, but the noun it refers to is singular, so the pronoun must be singular too.",
          "",
          "\"we\" switches person. The pronoun has to stay in the same person as the noun it refers to."
        ]
      }
    ],
    "bank": [
      {
        "q": "One of the musicians left ___ instrument on the stage.",
        "o": [
          "their",
          "his or her",
          "them",
          "they"
        ],
        "a": 1,
        "why": "\"One\" is singular, so \"his or her\" agrees.",
        "wx": [
          "\"their\" is plural, but the noun it refers to is singular, so the pronoun must be singular too.",
          "",
          "\"them\" is plural, but the noun it refers to is singular, so the pronoun must be singular too.",
          "\"they\" is plural, but the noun it refers to is singular, so the pronoun must be singular too."
        ]
      },
      {
        "q": "The flock of geese made ___ way across the field.",
        "o": [
          "their",
          "its",
          "them",
          "they"
        ],
        "a": 1,
        "why": "\"Flock\" is a collective noun treated as singular, so \"its\" agrees.",
        "wx": [
          "\"their\" is plural, but the noun it refers to is singular, so the pronoun must be singular too.",
          "",
          "\"them\" is plural, but the noun it refers to is singular, so the pronoun must be singular too.",
          "\"they\" is plural, but the noun it refers to is singular, so the pronoun must be singular too."
        ]
      },
      {
        "q": "If students want extra help, ___ can come after class.",
        "o": [
          "he",
          "she",
          "they",
          "it"
        ],
        "a": 2,
        "why": "\"Students\" is plural, so \"they\" agrees.",
        "wx": [
          "\"he\" is singular, but the noun it refers to is plural, so the pronoun must be plural.",
          "\"she\" is singular, but the noun it refers to is plural, so the pronoun must be plural.",
          "",
          "\"it\" is singular, but the noun it refers to is plural, so the pronoun must be plural."
        ]
      },
      {
        "q": "Each of the houses has ___ own garden.",
        "o": [
          "their",
          "its",
          "them",
          "they"
        ],
        "a": 1,
        "why": "\"Each\" is singular, so \"its\" agrees.",
        "wx": [
          "\"their\" is plural, but the noun it refers to is singular, so the pronoun must be singular too.",
          "",
          "\"them\" is plural, but the noun it refers to is singular, so the pronoun must be singular too.",
          "\"they\" is plural, but the noun it refers to is singular, so the pronoun must be singular too."
        ]
      },
      {
        "q": "The team celebrated ___ first championship.",
        "o": [
          "their",
          "its",
          "them",
          "they"
        ],
        "a": 1,
        "why": "\"Team\" is a collective noun treated as singular, so \"its\" agrees.",
        "wx": [
          "\"their\" is plural, but the noun it refers to is singular, so the pronoun must be singular too.",
          "",
          "\"them\" is plural, but the noun it refers to is singular, so the pronoun must be singular too.",
          "\"they\" is plural, but the noun it refers to is singular, so the pronoun must be singular too."
        ]
      },
      {
        "q": "Maya and Jordan packed ___ bags the night before.",
        "o": [
          "her",
          "his",
          "its",
          "their"
        ],
        "a": 3,
        "why": "The compound antecedent is plural, so \"their\" agrees.",
        "wx": [
          "\"her\" is singular, but the noun it refers to is plural, so the pronoun must be plural.",
          "\"his\" is singular, but the noun it refers to is plural, so the pronoun must be plural.",
          "\"its\" is singular, but the noun it refers to is plural, so the pronoun must be plural.",
          ""
        ]
      }
    ]
  },
  {
    "id": "plurals",
    "part": 1,
    "source": "A#4",
    "title": "Use apostrophes correctly to form plurals",
    "rule": "To make a plural noun that does not own anything, add s to the end of a singular noun. Do not use an apostrophe to create a plural noun. Apostrophes are for possessives or contractions, not for ordinary plurals.",
    "trap": "Adding an apostrophe plus s when you only mean \"more than one,\" such as writing \"hawk's\" for several hawks.",
    "before": "Every morning, many hawk's circled the field, looking for prey.",
    "after": "Every morning, many hawks circled the field, looking for prey.",
    "qs": [
      {
        "q": "Every morning, many ___ circled the field, looking for prey.",
        "o": [
          "hawk's",
          "hawks",
          "hawks'",
          "hawk"
        ],
        "a": 1,
        "why": "The hawks do not own anything here; they are a plain plural, so add s with no apostrophe: \"hawks.\"",
        "wx": [
          "\"hawk's\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "",
          "\"hawks'\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "\"hawk\" is not the plain plural this sentence needs (more than one, with no apostrophe)."
        ]
      },
      {
        "q": "The museum displayed several rare ___.",
        "o": [
          "coin's",
          "coins",
          "coins'",
          "coin"
        ],
        "a": 1,
        "why": "A plain plural takes s and no apostrophe: \"coins.\"",
        "wx": [
          "\"coin's\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "",
          "\"coins'\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "\"coin\" is not the plain plural this sentence needs (more than one, with no apostrophe)."
        ]
      },
      {
        "q": "Two ___ of the experiment failed.",
        "o": [
          "trial's",
          "trials",
          "trials'",
          "trial"
        ],
        "a": 1,
        "why": "\"Two trials\" is a plain plural, not a possessive, so there is no apostrophe.",
        "wx": [
          "\"trial's\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "",
          "\"trials'\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "\"trial\" is not the plain plural this sentence needs (more than one, with no apostrophe)."
        ]
      },
      {
        "q": "All of the ___ were locked after dusk.",
        "o": [
          "gate's",
          "gates",
          "gates'",
          "gate"
        ],
        "a": 1,
        "why": "Plain plural \"gates\" needs no apostrophe.",
        "wx": [
          "\"gate's\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "",
          "\"gates'\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "\"gate\" is not the plain plural this sentence needs (more than one, with no apostrophe)."
        ]
      },
      {
        "q": "The coach praised the team's spirit and the players' work, and she also thanked the many ___ who came.",
        "o": [
          "parent's",
          "parents",
          "parents'",
          "parent"
        ],
        "a": 1,
        "why": "These parents are simply a plural group being thanked; they are not shown as owners, so \"parents\" has no apostrophe.",
        "wx": [
          "\"parent's\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "",
          "\"parents'\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "\"parent\" is not the plain plural this sentence needs (more than one, with no apostrophe)."
        ]
      },
      {
        "q": "I counted four ___ on the windowsill.",
        "o": [
          "plant's",
          "plants",
          "plants'",
          "plant"
        ],
        "a": 1,
        "why": "\"Four plants\" is a count plural with no ownership, so no apostrophe.",
        "wx": [
          "\"plant's\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "",
          "\"plants'\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "\"plant\" is not the plain plural this sentence needs (more than one, with no apostrophe)."
        ]
      },
      {
        "q": "The printer jammed after fifty ___.",
        "o": [
          "page's",
          "pages",
          "pages'",
          "page"
        ],
        "a": 1,
        "why": "Plain plural \"pages\" does not take an apostrophe.",
        "wx": [
          "\"page's\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "",
          "\"pages'\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "\"page\" is not the plain plural this sentence needs (more than one, with no apostrophe)."
        ]
      },
      {
        "q": "Several ___ signed the petition.",
        "o": [
          "neighbor's",
          "neighbors",
          "neighbors'",
          "neighbor"
        ],
        "a": 1,
        "why": "A plain plural subject takes \"neighbors,\" not a possessive form.",
        "wx": [
          "\"neighbor's\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "",
          "\"neighbors'\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "\"neighbor\" is not the plain plural this sentence needs (more than one, with no apostrophe)."
        ]
      },
      {
        "q": "The box held three spare ___.",
        "o": [
          "key's",
          "keys",
          "keys'",
          "key"
        ],
        "a": 1,
        "why": "Plain plural \"keys\" has no apostrophe.",
        "wx": [
          "\"key's\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "",
          "\"keys'\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "\"key\" is not the plain plural this sentence needs (more than one, with no apostrophe)."
        ]
      },
      {
        "q": "During the 1990s, many ___ moved downtown.",
        "o": [
          "family's",
          "families",
          "families'",
          "family"
        ],
        "a": 1,
        "why": "\"Many families\" is a plain plural, so there is no apostrophe.",
        "wx": [
          "\"family's\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "",
          "\"families'\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "\"family\" is not the plain plural this sentence needs (more than one, with no apostrophe)."
        ]
      },
      {
        "q": "The recipe calls for two ___ of sugar.",
        "o": [
          "cup's",
          "cups",
          "cups'",
          "cup"
        ],
        "a": 1,
        "why": "A measured plural is still a plain plural: \"cups,\" with no apostrophe.",
        "wx": [
          "\"cup's\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "",
          "\"cups'\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "\"cup\" is not the plain plural this sentence needs (more than one, with no apostrophe)."
        ]
      },
      {
        "q": "Both ___ of the argument appear in the first paragraph.",
        "o": [
          "side's",
          "sides",
          "sides'",
          "side"
        ],
        "a": 1,
        "why": "Plain plural \"sides\" needs no apostrophe.",
        "wx": [
          "\"side's\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "",
          "\"sides'\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "\"side\" is not the plain plural this sentence needs (more than one, with no apostrophe)."
        ]
      }
    ],
    "bank": [
      {
        "q": "The farmer sold ten ___ at the market.",
        "o": [
          "apple's",
          "apples",
          "apples'",
          "apple"
        ],
        "a": 1,
        "why": "Plain plural \"apples\" has no apostrophe.",
        "wx": [
          "\"apple's\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "",
          "\"apples'\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "\"apple\" is not the plain plural this sentence needs (more than one, with no apostrophe)."
        ]
      },
      {
        "q": "Three ___ were waiting at the stop.",
        "o": [
          "bus's",
          "buses",
          "buses'",
          "bus"
        ],
        "a": 1,
        "why": "The plural of \"bus\" is \"buses,\" with no apostrophe.",
        "wx": [
          "\"bus's\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "",
          "\"buses'\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "\"bus\" is not the plain plural this sentence needs (more than one, with no apostrophe)."
        ]
      },
      {
        "q": "The archive stores thousands of ___.",
        "o": [
          "photo's",
          "photos",
          "photos'",
          "photo"
        ],
        "a": 1,
        "why": "Plain plural \"photos\" takes s and no apostrophe.",
        "wx": [
          "\"photo's\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "",
          "\"photos'\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "\"photo\" is not the plain plural this sentence needs (more than one, with no apostrophe)."
        ]
      },
      {
        "q": "Only a few ___ remained in the tray.",
        "o": [
          "form's",
          "forms",
          "forms'",
          "form"
        ],
        "a": 1,
        "why": "Plain plural \"forms\" needs no apostrophe.",
        "wx": [
          "\"form's\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "",
          "\"forms'\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "\"form\" is not the plain plural this sentence needs (more than one, with no apostrophe)."
        ]
      },
      {
        "q": "The guide listed the local ___.",
        "o": [
          "museum's",
          "museums",
          "museums'",
          "museum"
        ],
        "a": 1,
        "why": "These museums are a listed plural, not possessors, so \"museums\" has no apostrophe.",
        "wx": [
          "\"museum's\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "",
          "\"museums'\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "\"museum\" is not the plain plural this sentence needs (more than one, with no apostrophe)."
        ]
      },
      {
        "q": "Five ___ tried out for the part.",
        "o": [
          "actor's",
          "actors",
          "actors'",
          "actor"
        ],
        "a": 1,
        "why": "Plain plural \"actors\" has no apostrophe.",
        "wx": [
          "\"actor's\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "",
          "\"actors'\" uses an apostrophe. A plain plural (more than one, with no ownership) just adds -s or -es, with no apostrophe.",
          "\"actor\" is not the plain plural this sentence needs (more than one, with no apostrophe)."
        ]
      }
    ]
  },
  {
    "id": "apos",
    "part": 1,
    "source": "A#5",
    "title": "Use apostrophes correctly to form possessives",
    "rule": "If the word is singular or is plural but does not end in s, add apostrophe + s to form a possessive (the computer's monitor; the men's restroom). For a plural word that already ends in s, add only an apostrophe after the s (his parents' rules). Use apostrophes only for possessives or contractions, not to create plural nouns.",
    "trap": "Putting the apostrophe in the wrong place (novel's vs novels') or using an apostrophe when the word is only a plural.",
    "before": "Art Deco furniture is marked by the artists use of geometric shapes, curves, strong colors, and new materials, such as plastics.",
    "after": "Art Deco furniture is marked by the artist's use of geometric shapes, curves, strong colors, and new materials, such as plastics.",
    "qs": [
      {
        "q": "I shall be paying a visit to the ___ restroom.",
        "o": [
          "mens",
          "mens'",
          "men's",
          "man's"
        ],
        "a": 2,
        "why": "\"Men\" is a plural that does not end in s, so the possessive is \"men's.\"",
        "wx": [
          "\"mens\" has no apostrophe, so it does not show ownership.",
          "\"mens'\" puts the apostrophe in the wrong place, or it uses the wrong possessive form (singular 's vs. plural s' vs. 's on a plural that does not end in s).",
          "",
          "\"man's\" puts the apostrophe in the wrong place, or it uses the wrong possessive form (singular 's vs. plural s' vs. 's on a plural that does not end in s)."
        ]
      },
      {
        "q": "My ___ monitor is rather dirty.",
        "o": [
          "computers",
          "computers'",
          "computer's",
          "computer"
        ],
        "a": 2,
        "why": "One computer owns the monitor, so add apostrophe + s: \"computer's.\"",
        "wx": [
          "\"computers\" has no apostrophe, so it does not show ownership.",
          "\"computers'\" puts the apostrophe in the wrong place, or it uses the wrong possessive form (singular 's vs. plural s' vs. 's on a plural that does not end in s).",
          "",
          "\"computer\" has no apostrophe, so it does not show ownership."
        ]
      },
      {
        "q": "Juan thinks his ___ rules are too strict.",
        "o": [
          "parent's",
          "parents'",
          "parents",
          "parent"
        ],
        "a": 1,
        "why": "\"Parents\" is a plural that already ends in s, so add only an apostrophe: \"parents'.\"",
        "wx": [
          "\"parent's\" puts the apostrophe in the wrong place, or it uses the wrong possessive form (singular 's vs. plural s' vs. 's on a plural that does not end in s).",
          "",
          "\"parents\" has no apostrophe, so it does not show ownership.",
          "\"parent\" has no apostrophe, so it does not show ownership."
        ]
      },
      {
        "q": "The ___ due dates were printed on the slip. (books belonging to several people)",
        "o": [
          "books",
          "book's",
          "books'",
          "book"
        ],
        "a": 2,
        "why": "Several books as owners of due dates: plural possessive \"books'.\"",
        "wx": [
          "\"books\" has no apostrophe, so it does not show ownership.",
          "\"book's\" puts the apostrophe in the wrong place, or it uses the wrong possessive form (singular 's vs. plural s' vs. 's on a plural that does not end in s).",
          "",
          "\"book\" has no apostrophe, so it does not show ownership."
        ]
      },
      {
        "q": "Art Deco furniture is marked by the ___ use of geometric shapes.",
        "o": [
          "artists",
          "artists'",
          "artist's",
          "artist"
        ],
        "a": 2,
        "why": "The use belongs to the artist (singular), so \"artist's\" is the possessive.",
        "wx": [
          "\"artists\" has no apostrophe, so it does not show ownership.",
          "\"artists'\" puts the apostrophe in the wrong place, or it uses the wrong possessive form (singular 's vs. plural s' vs. 's on a plural that does not end in s).",
          "",
          "\"artist\" has no apostrophe, so it does not show ownership."
        ]
      },
      {
        "q": "The children left the ___ toys in the yard. (toys belonging to the children)",
        "o": [
          "childrens",
          "childrens'",
          "children's",
          "child's"
        ],
        "a": 2,
        "why": "\"Children\" is a plural that does not end in s, so the possessive is \"children's.\"",
        "wx": [
          "\"childrens\" has no apostrophe, so it does not show ownership.",
          "\"childrens'\" puts the apostrophe in the wrong place, or it uses the wrong possessive form (singular 's vs. plural s' vs. 's on a plural that does not end in s).",
          "",
          "\"child's\" puts the apostrophe in the wrong place, or it uses the wrong possessive form (singular 's vs. plural s' vs. 's on a plural that does not end in s)."
        ]
      },
      {
        "q": "The ___ first chapter is the shortest. (one novel)",
        "o": [
          "novels",
          "novel's",
          "novels'",
          "novel"
        ],
        "a": 1,
        "why": "One novel owns the chapter, so \"novel's.\"",
        "wx": [
          "\"novels\" has no apostrophe, so it does not show ownership.",
          "",
          "\"novels'\" puts the apostrophe in the wrong place, or it uses the wrong possessive form (singular 's vs. plural s' vs. 's on a plural that does not end in s).",
          "\"novel\" has no apostrophe, so it does not show ownership."
        ]
      },
      {
        "q": "Both ___ proposals were accepted. (the proposals of two agencies)",
        "o": [
          "agency's",
          "agencies'",
          "agencies",
          "agencys'"
        ],
        "a": 1,
        "why": "The plural \"agencies\" ends in s, so the possessive is \"agencies'.\"",
        "wx": [
          "\"agency's\" puts the apostrophe in the wrong place, or it uses the wrong possessive form (singular 's vs. plural s' vs. 's on a plural that does not end in s).",
          "",
          "\"agencies\" has no apostrophe, so it does not show ownership.",
          "\"agencys'\" puts the apostrophe in the wrong place, or it uses the wrong possessive form (singular 's vs. plural s' vs. 's on a plural that does not end in s)."
        ]
      },
      {
        "q": "This is ___ most famous painting.",
        "o": [
          "Da Vincis",
          "Da Vinci's",
          "Da Vincis'",
          "Da Vinci"
        ],
        "a": 1,
        "why": "A singular name takes apostrophe + s: \"Da Vinci's.\"",
        "wx": [
          "\"Da Vincis\" has no apostrophe, so it does not show ownership.",
          "",
          "\"Da Vincis'\" puts the apostrophe in the wrong place, or it uses the wrong possessive form (singular 's vs. plural s' vs. 's on a plural that does not end in s).",
          "\"Da Vinci\" has no apostrophe, so it does not show ownership."
        ]
      },
      {
        "q": "The city council will review the ___ request tomorrow. (one mayor)",
        "o": [
          "mayors",
          "mayor's",
          "mayors'",
          "mayor"
        ],
        "a": 1,
        "why": "One mayor owns the request, so \"mayor's.\"",
        "wx": [
          "\"mayors\" has no apostrophe, so it does not show ownership.",
          "",
          "\"mayors'\" puts the apostrophe in the wrong place, or it uses the wrong possessive form (singular 's vs. plural s' vs. 's on a plural that does not end in s).",
          "\"mayor\" has no apostrophe, so it does not show ownership."
        ]
      },
      {
        "q": "All of the ___ uniforms need mending. (uniforms of many players)",
        "o": [
          "player's",
          "players'",
          "players",
          "player"
        ],
        "a": 1,
        "why": "Plural \"players\" ending in s takes only an apostrophe: \"players'.\"",
        "wx": [
          "\"player's\" puts the apostrophe in the wrong place, or it uses the wrong possessive form (singular 's vs. plural s' vs. 's on a plural that does not end in s).",
          "",
          "\"players\" has no apostrophe, so it does not show ownership.",
          "\"player\" has no apostrophe, so it does not show ownership."
        ]
      },
      {
        "q": "The ___ hinge is loose. (one door)",
        "o": [
          "doors",
          "door's",
          "doors'",
          "door"
        ],
        "a": 1,
        "why": "One door owns the hinge, so \"door's.\"",
        "wx": [
          "\"doors\" has no apostrophe, so it does not show ownership.",
          "",
          "\"doors'\" puts the apostrophe in the wrong place, or it uses the wrong possessive form (singular 's vs. plural s' vs. 's on a plural that does not end in s).",
          "\"door\" has no apostrophe, so it does not show ownership."
        ]
      }
    ],
    "bank": [
      {
        "q": "We met at the ___ office. (one counselor)",
        "o": [
          "counselors",
          "counselor's",
          "counselors'",
          "counselor"
        ],
        "a": 1,
        "why": "Singular possessive: \"counselor's.\"",
        "wx": [
          "\"counselors\" has no apostrophe, so it does not show ownership.",
          "",
          "\"counselors'\" puts the apostrophe in the wrong place, or it uses the wrong possessive form (singular 's vs. plural s' vs. 's on a plural that does not end in s).",
          "\"counselor\" has no apostrophe, so it does not show ownership."
        ]
      },
      {
        "q": "The ___ voices carried down the hall. (several teachers)",
        "o": [
          "teacher's",
          "teachers'",
          "teachers",
          "teacher"
        ],
        "a": 1,
        "why": "Plural possessive of a word ending in s is \"teachers'.\"",
        "wx": [
          "\"teacher's\" puts the apostrophe in the wrong place, or it uses the wrong possessive form (singular 's vs. plural s' vs. 's on a plural that does not end in s).",
          "",
          "\"teachers\" has no apostrophe, so it does not show ownership.",
          "\"teacher\" has no apostrophe, so it does not show ownership."
        ]
      },
      {
        "q": "___ ending surprised the class. (one poem)",
        "o": [
          "Poems",
          "Poem's",
          "Poems'",
          "Poem"
        ],
        "a": 1,
        "why": "Singular possessive: \"Poem's.\"",
        "wx": [
          "\"Poems\" has no apostrophe, so it does not show ownership.",
          "",
          "\"Poems'\" puts the apostrophe in the wrong place, or it uses the wrong possessive form (singular 's vs. plural s' vs. 's on a plural that does not end in s).",
          "\"Poem\" has no apostrophe, so it does not show ownership."
        ]
      },
      {
        "q": "The ___ rain gear is in the closet. (the family of the women — women's)",
        "o": [
          "womens",
          "womens'",
          "women's",
          "woman's"
        ],
        "a": 2,
        "why": "\"Women\" does not end in s, so the possessive is \"women's.\"",
        "wx": [
          "\"womens\" has no apostrophe, so it does not show ownership.",
          "\"womens'\" puts the apostrophe in the wrong place, or it uses the wrong possessive form (singular 's vs. plural s' vs. 's on a plural that does not end in s).",
          "",
          "\"woman's\" puts the apostrophe in the wrong place, or it uses the wrong possessive form (singular 's vs. plural s' vs. 's on a plural that does not end in s)."
        ]
      },
      {
        "q": "Please return the ___ keys. (one guest)",
        "o": [
          "guests",
          "guest's",
          "guests'",
          "guest"
        ],
        "a": 1,
        "why": "Singular possessive: \"guest's.\"",
        "wx": [
          "\"guests\" has no apostrophe, so it does not show ownership.",
          "",
          "\"guests'\" puts the apostrophe in the wrong place, or it uses the wrong possessive form (singular 's vs. plural s' vs. 's on a plural that does not end in s).",
          "\"guest\" has no apostrophe, so it does not show ownership."
        ]
      },
      {
        "q": "The two ___ roofs were repaired. (two barns)",
        "o": [
          "barn's",
          "barns'",
          "barns",
          "barn"
        ],
        "a": 1,
        "why": "Plural possessive: \"barns'.\"",
        "wx": [
          "\"barn's\" puts the apostrophe in the wrong place, or it uses the wrong possessive form (singular 's vs. plural s' vs. 's on a plural that does not end in s).",
          "",
          "\"barns\" has no apostrophe, so it does not show ownership.",
          "\"barn\" has no apostrophe, so it does not show ownership."
        ]
      }
    ]
  },
  {
    "id": "modpunct",
    "part": 1,
    "source": "A#6",
    "title": "Surround non-restrictive clauses and appositives with commas or dashes",
    "rule": "Restrictive clauses are necessary to the meaning of the sentence and should not be surrounded by commas. Non-restrictive clauses and appositives add extra information and can be removed without changing the basic meaning; they should be set off with commas (or dashes): one after a modifier that starts a sentence, one before a modifier that ends a sentence, and commas (or dashes) on both sides when the modifier is in the middle.",
    "trap": "Putting commas around a clause the sentence needs, or leaving out the commas around extra information such as an appositive.",
    "before": "Joe's parents who constantly call him are very overprotective.",
    "after": "Joe's parents, who constantly call him, are very overprotective.",
    "qs": [
      {
        "q": "Students who read regularly are prepared for the SAT. Commas around \"who read regularly\" would be",
        "o": [
          "required, because the clause is extra",
          "incorrect, because the clause is needed to identify which students",
          "optional either way",
          "required only before \"who\""
        ],
        "a": 1,
        "why": "Without the clause, the meaning changes to all students. The clause is restrictive, so it should not be surrounded by commas.",
        "wx": [
          "\"required, because the clause is extra\" is not the problem, or not the right fix, in this sentence.",
          "",
          "\"optional either way\" is not the problem, or not the right fix, in this sentence.",
          "\"required only before \"who\"\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "Choose the correctly punctuated sentence about Val.",
        "o": [
          "Val a Wisconsin native loves fried cheese curds.",
          "Val, a Wisconsin native loves fried cheese curds.",
          "Val, a Wisconsin native, loves fried cheese curds.",
          "Val a Wisconsin native, loves fried cheese curds."
        ],
        "a": 2,
        "why": "The appositive \"a Wisconsin native\" is extra information and must have commas on both sides.",
        "wx": [
          "This version does not punctuate the modifier correctly: extra (non-restrictive) material needs a matching comma or dash on both sides, and essential material takes no commas.",
          "This version does not punctuate the modifier correctly: extra (non-restrictive) material needs a matching comma or dash on both sides, and essential material takes no commas.",
          "",
          "This version does not punctuate the modifier correctly: extra (non-restrictive) material needs a matching comma or dash on both sides, and essential material takes no commas."
        ]
      },
      {
        "q": "Joe's parents___ who constantly call him___ are very overprotective.",
        "o": [
          "commas on both sides",
          "no commas",
          "semicolons on both sides",
          "a comma and then a semicolon"
        ],
        "a": 0,
        "why": "The clause is non-restrictive, so it is bookended by commas.",
        "wx": [
          "",
          "\"no commas\" is not the problem, or not the right fix, in this sentence.",
          "\"semicolons on both sides\" is not the right punctuation here.",
          "\"a comma and then a semicolon\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "US President, Barack Obama, will meet with his counterparts. The commas are",
        "o": [
          "correct, because the name is extra",
          "incorrect, because the name is essential to the meaning",
          "correct only after \"President\"",
          "required by any title"
        ],
        "a": 1,
        "why": "The name is essential here, so the modifier is restrictive and should not be surrounded by commas.",
        "wx": [
          "\"correct, because the name is extra\" is not the problem, or not the right fix, in this sentence.",
          "",
          "\"correct only after \"President\"\" is not the right punctuation here.",
          "\"required by any title\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "Started on a whim by an eccentric resident___ the project soon became a neighborhood pastime.",
        "o": [
          ";",
          ",",
          ":",
          "and a colon"
        ],
        "a": 1,
        "why": "An introductory modifier should be set off by a comma, not a semicolon.",
        "wx": [
          "\";\" is not the right punctuation here.",
          "",
          "\":\" is not the right punctuation here.",
          "\"and a colon\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "Which revision correctly punctuates the daisy sentence?",
        "o": [
          "The daisy, a perennial plant sometimes known as bruisewort, grows low to the ground.",
          "The daisy a perennial plant sometimes known as bruisewort grows low to the ground.",
          "The daisy, a perennial plant, sometimes known as bruisewort grows low to the ground.",
          "The daisy; a perennial plant sometimes known as bruisewort; grows low to the ground."
        ],
        "a": 0,
        "why": "The whole modifier should be surrounded by commas, with no extra comma inside it.",
        "wx": [
          "",
          "This version does not punctuate the modifier correctly: extra (non-restrictive) material needs a matching comma or dash on both sides, and essential material takes no commas.",
          "This version does not punctuate the modifier correctly: extra (non-restrictive) material needs a matching comma or dash on both sides, and essential material takes no commas.",
          "This version does not punctuate the modifier correctly: extra (non-restrictive) material needs a matching comma or dash on both sides, and essential material takes no commas."
        ]
      },
      {
        "q": "This part of the minuet should be played with steadily increasing volume, or crescendo___ until the final chord.",
        "o": [
          ";",
          ",",
          ":",
          "and a semicolon"
        ],
        "a": 1,
        "why": "The defining phrase \"or crescendo\" is extra information and should be set off by a comma, not a semicolon.",
        "wx": [
          "\";\" is not the right punctuation here.",
          "",
          "\":\" is not the right punctuation here.",
          "\"and a semicolon\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "Which sentence correctly punctuates a restrictive clause?",
        "o": [
          "Cars, that use electric motors, need less oil.",
          "Cars that use electric motors need less oil.",
          "Cars that use electric motors, need less oil.",
          "Cars, that use electric motors need less oil."
        ],
        "a": 1,
        "why": "\"That use electric motors\" identifies which cars, so it is restrictive and takes no commas.",
        "wx": [
          "This version does not punctuate the modifier correctly: extra (non-restrictive) material needs a matching comma or dash on both sides, and essential material takes no commas.",
          "",
          "This version does not punctuate the modifier correctly: extra (non-restrictive) material needs a matching comma or dash on both sides, and essential material takes no commas.",
          "This version does not punctuate the modifier correctly: extra (non-restrictive) material needs a matching comma or dash on both sides, and essential material takes no commas."
        ]
      },
      {
        "q": "My oldest sister, who lives in Austin, is visiting. If you remove the clause, the sentence",
        "o": [
          "changes which sister you mean",
          "keeps the same basic meaning",
          "becomes a fragment",
          "needs a semicolon"
        ],
        "a": 1,
        "why": "If the speaker has one oldest sister, the clause is extra; the sentence still means that sister is visiting.",
        "wx": [
          "\"changes which sister you mean\" is not the right punctuation here.",
          "",
          "\"becomes a fragment\" is not the problem, or not the right fix, in this sentence.",
          "\"needs a semicolon\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "The novel ___ a finalist for the prize ___ will be published in May.",
        "o": [
          "takes commas on both sides",
          "takes no commas",
          "takes a semicolon then a comma",
          "takes a comma then a semicolon"
        ],
        "a": 0,
        "why": "The appositive is extra and needs a comma on both sides.",
        "wx": [
          "",
          "\"takes no commas\" is not the problem, or not the right fix, in this sentence.",
          "\"takes a semicolon then a comma\" is not the problem, or not the right fix, in this sentence.",
          "\"takes a comma then a semicolon\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "People who work night shifts often sleep in the morning. The clause \"who work night shifts\" is",
        "o": [
          "non-restrictive and needs commas",
          "restrictive and should not have commas",
          "an independent clause",
          "an appositive requiring dashes only"
        ],
        "a": 1,
        "why": "The clause tells which people; removing it changes the meaning, so it is restrictive.",
        "wx": [
          "\"non-restrictive and needs commas\" is not the right punctuation here.",
          "",
          "\"an independent clause\" is not the right punctuation here.",
          "\"an appositive requiring dashes only\" is not the right punctuation here."
        ]
      },
      {
        "q": "Which sentence is correctly punctuated?",
        "o": [
          "The keynote speaker Dr. Patel, arrived late.",
          "The keynote speaker, Dr. Patel arrived late.",
          "The keynote speaker, Dr. Patel, arrived late.",
          "The keynote speaker; Dr. Patel; arrived late."
        ],
        "a": 2,
        "why": "If Dr. Patel names an already identified speaker, the appositive is set off with commas on both sides.",
        "wx": [
          "This version does not punctuate the modifier correctly: extra (non-restrictive) material needs a matching comma or dash on both sides, and essential material takes no commas.",
          "This version does not punctuate the modifier correctly: extra (non-restrictive) material needs a matching comma or dash on both sides, and essential material takes no commas.",
          "",
          "This version does not punctuate the modifier correctly: extra (non-restrictive) material needs a matching comma or dash on both sides, and essential material takes no commas."
        ]
      }
    ],
    "bank": [
      {
        "q": "The river that runs through town flooded in April. Commas around \"that runs through town\" would be",
        "o": [
          "correct, as extra information",
          "incorrect, because the clause identifies which river",
          "required after \"river\" only",
          "required because \"that\" always takes commas"
        ],
        "a": 1,
        "why": "The clause is needed to identify the river, so it is restrictive and should not be set off with commas.",
        "wx": [
          "\"correct, as extra information\" is not the right punctuation here.",
          "",
          "\"required after \"river\" only\" is not the problem, or not the right fix, in this sentence.",
          "\"required because \"that\" always takes commas\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "Lina___ my lab partner___ checked the results twice.",
        "o": [
          "takes commas on both sides",
          "takes no commas",
          "takes semicolons on both sides",
          "takes a comma and a period"
        ],
        "a": 0,
        "why": "The appositive \"my lab partner\" is extra and needs commas on both sides.",
        "wx": [
          "",
          "\"takes no commas\" is not the problem, or not the right fix, in this sentence.",
          "\"takes semicolons on both sides\" is not the right punctuation here.",
          "\"takes a comma and a period\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "Which sentence correctly punctuates the introductory modifier?",
        "o": [
          "Tired after the trip; we went straight to bed.",
          "Tired after the trip, we went straight to bed.",
          "Tired after the trip we, went straight to bed.",
          "Tired after the trip: we went straight to bed."
        ],
        "a": 1,
        "why": "An introductory modifier is set off with a comma, not a semicolon or colon.",
        "wx": [
          "This version does not punctuate the modifier correctly: extra (non-restrictive) material needs a matching comma or dash on both sides, and essential material takes no commas.",
          "",
          "This version does not punctuate the modifier correctly: extra (non-restrictive) material needs a matching comma or dash on both sides, and essential material takes no commas.",
          "This version does not punctuate the modifier correctly: extra (non-restrictive) material needs a matching comma or dash on both sides, and essential material takes no commas."
        ]
      },
      {
        "q": "Books that have missing pages are set aside. The clause is",
        "o": [
          "non-restrictive",
          "restrictive",
          "a complete sentence",
          "an appositive"
        ],
        "a": 1,
        "why": "It identifies which books, so it is restrictive and takes no commas.",
        "wx": [
          "\"non-restrictive\" is not the right punctuation here.",
          "",
          "\"a complete sentence\" is not the right punctuation here.",
          "\"an appositive\" is not the right punctuation here."
        ]
      },
      {
        "q": "The prize went to Nia who had practiced for months. A comma is needed",
        "o": [
          "nowhere",
          "before \"who\" if the clause is extra information about an already identified Nia",
          "after \"who\"",
          "before and after \"prize\""
        ],
        "a": 1,
        "why": "If Nia is already identified, the clause is non-restrictive and should follow a comma.",
        "wx": [
          "\"nowhere\" is not the right punctuation here.",
          "",
          "\"after \"who\"\" is not the right punctuation here.",
          "\"before and after \"prize\"\" is not the right punctuation here."
        ]
      },
      {
        "q": "Our guide, a historian of the region, pointed to the map. The phrase \"a historian of the region\" is",
        "o": [
          "restrictive and should lose its commas",
          "an appositive set off with commas",
          "a second independent clause",
          "incorrect unless written with a semicolon"
        ],
        "a": 1,
        "why": "It is an appositive: extra information set off with commas on both sides.",
        "wx": [
          "This version does not punctuate the modifier correctly: extra (non-restrictive) material needs a matching comma or dash on both sides, and essential material takes no commas.",
          "",
          "\"a second independent clause\" is not the right punctuation here.",
          "\"incorrect unless written with a semicolon\" is not the problem, or not the right fix, in this sentence."
        ]
      }
    ]
  },
  {
    "id": "semicolon",
    "part": 1,
    "source": "A#7",
    "title": "Semicolons separate two complete thoughts",
    "rule": "Semicolons function like periods: they separate two independent clauses. You should be able to replace a semicolon with a period. Use a semicolon to fix a comma splice (two complete thoughts joined by only a comma). Semicolons are also used to separate list items that already contain commas.",
    "trap": "Placing a semicolon after a dependent clause, or using only a comma between two complete sentences.",
    "before": "Because Teresa wanted to please her family; she became a doctor.",
    "after": "Teresa wanted to please her family; she became a doctor.",
    "qs": [
      {
        "q": "Teresa wanted to please her family___ she became a doctor.",
        "o": [
          ",",
          ";",
          "because she wanted a career",
          "and then a colon"
        ],
        "a": 1,
        "why": "Both sides are independent clauses, so a semicolon (which works like a period) correctly joins them.",
        "wx": [
          "A comma alone cannot join two complete sentences. If both sides are complete, a semicolon can.",
          "",
          "\"because she wanted a career\" is not the problem, or not the right fix, in this sentence.",
          "\"and then a colon\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "Because Teresa wanted to please her family___ she became a doctor.",
        "o": [
          ";",
          ",",
          ":",
          "and a semicolon after Because"
        ],
        "a": 1,
        "why": "The first clause is dependent (it starts with \"Because\"), so a comma, not a semicolon, should join it to the main clause.",
        "wx": [
          "A semicolon needs a complete sentence on both sides. If one side is a dependent clause, use a comma instead.",
          "",
          "A colon is not the right join here.",
          "\"and a semicolon after Because\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "Drinking water is scarce in desert areas like Las Vegas___ it needs to be shipped from water-rich states.",
        "o": [
          ",",
          ";",
          "and so,",
          "because:"
        ],
        "a": 1,
        "why": "Both clauses are complete thoughts, so a semicolon is the correct separator.",
        "wx": [
          "A comma alone cannot join two complete sentences. If both sides are complete, a semicolon can.",
          "",
          "\"and so,\" is not the right punctuation here.",
          "\"because:\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "The architect worked on the model all night___ he was bleary-eyed during the presentation.",
        "o": [
          ",",
          ";",
          ":",
          ", and then a colon"
        ],
        "a": 1,
        "why": "These are two independent clauses. A comma alone would be a comma splice; a semicolon fixes it.",
        "wx": [
          "A comma alone cannot join two complete sentences. If both sides are complete, a semicolon can.",
          "",
          "A colon is not the right join here.",
          "\", and then a colon\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "Jim rode his bike___ Mary walked.",
        "o": [
          ",",
          ";",
          "because",
          "to"
        ],
        "a": 1,
        "why": "Two short independent clauses are correctly joined by a semicolon.",
        "wx": [
          "A comma alone cannot join two complete sentences. If both sides are complete, a semicolon can.",
          "",
          "\"because\" is not the right punctuation here.",
          "\"to\" is not the right punctuation here."
        ]
      },
      {
        "q": "The department finished three assignments: talks, led by an expert___ a meeting, chaired by a director___ and a state visit.",
        "o": [
          ", and ,",
          "; and ;",
          ": and :",
          ", and ;"
        ],
        "a": 1,
        "why": "List items that already contain commas should be separated by semicolons.",
        "wx": [
          "\", and ,\" is not the right punctuation here.",
          "",
          "\": and :\" is not the right punctuation here.",
          "\", and ;\" is not the right punctuation here."
        ]
      },
      {
        "q": "Which sentence uses a semicolon correctly?",
        "o": [
          "Although the train was late; we still arrived on time.",
          "The train was late; we still arrived on time.",
          "The train was late; and we still arrived on time.",
          "The train was late, we still arrived on time."
        ],
        "a": 1,
        "why": "A semicolon should sit between two independent clauses, without a conjunction and not after a dependent clause.",
        "wx": [
          "This version does not use the semicolon correctly. A semicolon joins two complete sentences, or separates list items that already contain commas.",
          "",
          "This version does not use the semicolon correctly. A semicolon joins two complete sentences, or separates list items that already contain commas.",
          "This version does not use the semicolon correctly. A semicolon joins two complete sentences, or separates list items that already contain commas."
        ]
      },
      {
        "q": "We ate mushrooms, which had been picked nearby___ herbs, nuts, and berries from a park___ and homegrown apples.",
        "o": [
          ", and ,",
          "; and ;",
          ": and :",
          "; and ,"
        ],
        "a": 1,
        "why": "Because some list items contain commas, the items themselves are separated by semicolons.",
        "wx": [
          "\", and ,\" is not the right punctuation here.",
          "",
          "\": and :\" is not the right punctuation here.",
          "\"; and ,\" is not the right punctuation here."
        ]
      },
      {
        "q": "The lab was closed for repairs___ the students moved their project to a spare room.",
        "o": [
          ",",
          ";",
          "which",
          "to"
        ],
        "a": 1,
        "why": "Both sides can stand as sentences, so a semicolon is appropriate.",
        "wx": [
          "A comma alone cannot join two complete sentences. If both sides are complete, a semicolon can.",
          "",
          "\"which\" is not the right punctuation here.",
          "\"to\" is not the right punctuation here."
        ]
      },
      {
        "q": "When the lights dimmed___ the audience grew quiet.",
        "o": [
          ";",
          ",",
          ":",
          "and;"
        ],
        "a": 1,
        "why": "\"When the lights dimmed\" is a dependent clause, so use a comma, not a semicolon.",
        "wx": [
          "A semicolon needs a complete sentence on both sides. If one side is a dependent clause, use a comma instead.",
          "",
          "A colon is not the right join here.",
          "\"and;\" is not the right punctuation here."
        ]
      },
      {
        "q": "The first draft was messy, it needed a full revision. The error is a",
        "o": [
          "fragment",
          "comma splice, which a semicolon can fix",
          "missing apostrophe",
          "dangling modifier"
        ],
        "a": 1,
        "why": "Two independent clauses are joined by only a comma. A semicolon (or a period) would correct the run-on.",
        "wx": [
          "\"fragment\" is not the right punctuation here.",
          "",
          "\"missing apostrophe\" is not the right punctuation here.",
          "\"dangling modifier\" is not the right punctuation here."
        ]
      },
      {
        "q": "Which sentence is correctly punctuated?",
        "o": [
          "I packed a lunch; because the cafeteria was closed.",
          "I packed a lunch; the cafeteria was closed.",
          "I packed a lunch, the cafeteria was closed.",
          "I packed a lunch the cafeteria was closed."
        ],
        "a": 1,
        "why": "Both clauses are independent, so a semicolon is correct. \"Because\" would make a dependent clause, which should not follow a semicolon.",
        "wx": [
          "This version does not use the semicolon correctly. A semicolon joins two complete sentences, or separates list items that already contain commas.",
          "",
          "This version does not use the semicolon correctly. A semicolon joins two complete sentences, or separates list items that already contain commas.",
          "This version does not use the semicolon correctly. A semicolon joins two complete sentences, or separates list items that already contain commas."
        ]
      }
    ],
    "bank": [
      {
        "q": "The storm passed at midnight___ the roads were clear by dawn.",
        "o": [
          ",",
          ";",
          "which",
          "to"
        ],
        "a": 1,
        "why": "Two complete thoughts should be separated by a semicolon, not by a comma alone.",
        "wx": [
          "A comma alone cannot join two complete sentences. If both sides are complete, a semicolon can.",
          "",
          "\"which\" is not the right punctuation here.",
          "\"to\" is not the right punctuation here."
        ]
      },
      {
        "q": "After the curtain rose___ the orchestra began the overture.",
        "o": [
          ";",
          ",",
          ":",
          "and a semicolon"
        ],
        "a": 1,
        "why": "The opening clause is dependent, so a comma is required, not a semicolon.",
        "wx": [
          "A semicolon needs a complete sentence on both sides. If one side is a dependent clause, use a comma instead.",
          "",
          "A colon is not the right join here.",
          "\"and a semicolon\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "She brought pencils, which were freshly sharpened___ a ruler, a compass, and spare lead___ and a notebook.",
        "o": [
          ", and ,",
          "; and ;",
          ": and ,",
          ", and ;"
        ],
        "a": 1,
        "why": "Items that contain commas are separated from one another by semicolons.",
        "wx": [
          "\", and ,\" is not the right punctuation here.",
          "",
          "\": and ,\" is not the right punctuation here.",
          "\", and ;\" is not the right punctuation here."
        ]
      },
      {
        "q": "The map was outdated; and the trail had moved. The best revision is",
        "o": [
          "The map was outdated; the trail had moved.",
          "The map was outdated, the trail had moved.",
          "The map was outdated; and, the trail had moved.",
          "The map was outdated and; the trail had moved."
        ],
        "a": 0,
        "why": "Do not place a coordinating conjunction right after a semicolon when joining two independent clauses; the semicolon alone is enough.",
        "wx": [
          "",
          "This version does not use the semicolon correctly. A semicolon joins two complete sentences, or separates list items that already contain commas.",
          "This version does not use the semicolon correctly. A semicolon joins two complete sentences, or separates list items that already contain commas.",
          "This version does not use the semicolon correctly. A semicolon joins two complete sentences, or separates list items that already contain commas."
        ]
      },
      {
        "q": "My favorite spread is hummus it is very garlicky. A correct fix is",
        "o": [
          "hummus, it is very garlicky",
          "hummus; it is very garlicky",
          "hummus: it is, very garlicky",
          "hummus it; is very garlicky"
        ],
        "a": 1,
        "why": "Two independent clauses with no punctuation are a run-on; a semicolon separates them correctly.",
        "wx": [
          "\"hummus, it is very garlicky\" is not the problem, or not the right fix, in this sentence.",
          "",
          "\"hummus: it is, very garlicky\" is not the problem, or not the right fix, in this sentence.",
          "\"hummus it; is very garlicky\" is not the right punctuation here."
        ]
      },
      {
        "q": "While the bread baked; Owen set the table. The semicolon is",
        "o": [
          "correct, because both clauses are complete",
          "incorrect, because the first clause is dependent",
          "required before any \"while\" clause",
          "interchangeable with a colon"
        ],
        "a": 1,
        "why": "\"While the bread baked\" cannot stand alone, so a comma, not a semicolon, should follow it.",
        "wx": [
          "\"correct, because both clauses are complete\" is not the problem, or not the right fix, in this sentence.",
          "",
          "\"required before any \"while\" clause\" is not the problem, or not the right fix, in this sentence.",
          "\"interchangeable with a colon\" is not the problem, or not the right fix, in this sentence."
        ]
      }
    ]
  },
  {
    "id": "colon",
    "part": 1,
    "source": "A#8",
    "title": "A colon must come after an independent clause",
    "rule": "Colons usually introduce a list, an explanation, a definition, or an example. The key rule is that a colon must come after a complete sentence. If you end the sentence where the colon is placed, that first part should make sense as a complete thought.",
    "trap": "Placing a colon after an incomplete phrase such as \"like\" or \"include,\" or using a colon where the first part cannot stand as a sentence.",
    "before": "Meena enjoys multiple genres of music like: alternative, rap, heavy metal, and country.",
    "after": "Meena enjoys multiple genres of music: alternative, rap, heavy metal, and country.",
    "qs": [
      {
        "q": "Meena enjoys multiple genres of music___ alternative, rap, heavy metal, and country.",
        "o": [
          "like:",
          ":",
          "such as:",
          ";"
        ],
        "a": 1,
        "why": "The words before the colon form a complete sentence, and the colon correctly introduces the list.",
        "wx": [
          "A colon should not follow \"like\" or \"such as,\" because that is not the end of a complete sentence.",
          "",
          "A colon should not follow \"like\" or \"such as,\" because that is not the end of a complete sentence.",
          "A semicolon does not introduce a list or explanation the way a colon does after a complete sentence."
        ]
      },
      {
        "q": "Meena enjoys multiple genres of music like___ alternative, rap, heavy metal, and country.",
        "o": [
          "a colon after \"like\"",
          "no colon after \"like\"",
          "a semicolon after \"like\"",
          "a colon before and after \"like\""
        ],
        "a": 1,
        "why": "\"Like\" is not the end of a complete thought, so a colon should not follow it.",
        "wx": [
          "\"a colon after \"like\"\" is not the problem, or not the right fix, in this sentence.",
          "",
          "\"a semicolon after \"like\"\" is not the problem, or not the right fix, in this sentence.",
          "\"a colon before and after \"like\"\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "It is easy to explain why many seniors ease up at the end of the year___ senioritis.",
        "o": [
          ";",
          ":",
          ",",
          "and;"
        ],
        "a": 1,
        "why": "\"Senioritis\" is the explanation of what has just been said, and the first clause is complete, so a colon is correct.",
        "wx": [
          "A semicolon does not introduce a list or explanation the way a colon does after a complete sentence.",
          "",
          "\",\" is not the right punctuation here.",
          "\"and;\" is not the right punctuation here."
        ]
      },
      {
        "q": "The more I cook at home, the more kitchen techniques I learn___ knife skills, mise en place, and timing.",
        "o": [
          ",",
          ":",
          ";",
          "like:"
        ],
        "a": 1,
        "why": "The clause before the list is complete, so a colon may introduce the list.",
        "wx": [
          "\",\" is not the right punctuation here.",
          "",
          "A semicolon does not introduce a list or explanation the way a colon does after a complete sentence.",
          "A colon should not follow \"like\" or \"such as,\" because that is not the end of a complete sentence."
        ]
      },
      {
        "q": "Consider lobsters, for example___ with age, they only get stronger and more fertile.",
        "o": [
          ",",
          ":",
          ";",
          "and"
        ],
        "a": 1,
        "why": "\"For example\" introduces an explanation after a complete thought, so a colon is the right mark.",
        "wx": [
          "\",\" is not the right punctuation here.",
          "",
          "A semicolon does not introduce a list or explanation the way a colon does after a complete sentence.",
          "\"and\" is not the right punctuation here."
        ]
      },
      {
        "q": "My search for the perfect pet came down to man's best friend___ a dog.",
        "o": [
          ",",
          ":",
          ";",
          "like:"
        ],
        "a": 1,
        "why": "The first clause is complete, and the colon introduces a definition: \"a dog.\"",
        "wx": [
          "\",\" is not the right punctuation here.",
          "",
          "A semicolon does not introduce a list or explanation the way a colon does after a complete sentence.",
          "A colon should not follow \"like\" or \"such as,\" because that is not the end of a complete sentence."
        ]
      },
      {
        "q": "Here is my list of acceptable pets___ dogs, cats, gerbils, and fish.",
        "o": [
          ",",
          ":",
          ";",
          "such as:"
        ],
        "a": 1,
        "why": "The clause before the list is a complete sentence, so a colon may introduce the list.",
        "wx": [
          "\",\" is not the right punctuation here.",
          "",
          "A semicolon does not introduce a list or explanation the way a colon does after a complete sentence.",
          "A colon should not follow \"like\" or \"such as,\" because that is not the end of a complete sentence."
        ]
      },
      {
        "q": "The ingredients include___ flour, sugar, and butter.",
        "o": [
          ":",
          "no colon, because the first part is not a complete thought",
          ";",
          "a dash plus a colon"
        ],
        "a": 1,
        "why": "\"The ingredients include\" is not a complete thought on its own, so a colon should not follow it.",
        "wx": [
          "\":\" is not the right punctuation here.",
          "",
          "A semicolon does not introduce a list or explanation the way a colon does after a complete sentence.",
          "\"a dash plus a colon\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "The official reason is simple___ the samples were contaminated.",
        "o": [
          ",",
          ":",
          "because",
          "like"
        ],
        "a": 1,
        "why": "A complete clause is followed by an explanation, which a colon may introduce.",
        "wx": [
          "\",\" is not the right punctuation here.",
          "",
          "\"because\" is not the right punctuation here.",
          "\"like\" is not the right punctuation here."
        ]
      },
      {
        "q": "She had one major accomplishment___ a complete revision of the code.",
        "o": [
          ",",
          ":",
          "such as:",
          "like:"
        ],
        "a": 1,
        "why": "The first clause is complete and identifies what follows, so a colon is correct.",
        "wx": [
          "\",\" is not the right punctuation here.",
          "",
          "A colon should not follow \"like\" or \"such as,\" because that is not the end of a complete sentence.",
          "A colon should not follow \"like\" or \"such as,\" because that is not the end of a complete sentence."
        ]
      },
      {
        "q": "Which sentence uses a colon correctly?",
        "o": [
          "The bag held: apples, pears, and plums.",
          "The bag held three kinds of fruit: apples, pears, and plums.",
          "The bag held three kinds of fruit; apples, pears, and plums.",
          "The bag held three kinds of fruit, apples, pears and: plums."
        ],
        "a": 1,
        "why": "A colon must follow a complete thought. \"The bag held\" is incomplete; \"The bag held three kinds of fruit\" is complete and may introduce the list.",
        "wx": [
          "A colon can be used only after a complete sentence, to introduce a list, explanation, or example. This version breaks that rule.",
          "",
          "A colon can be used only after a complete sentence, to introduce a list, explanation, or example. This version breaks that rule.",
          "A colon can be used only after a complete sentence, to introduce a list, explanation, or example. This version breaks that rule."
        ]
      },
      {
        "q": "He asked for only one thing___ silence.",
        "o": [
          ",",
          ":",
          ";",
          "and:"
        ],
        "a": 1,
        "why": "The clause before the colon is complete, and \"silence\" is the explanation of that thing.",
        "wx": [
          "\",\" is not the right punctuation here.",
          "",
          "A semicolon does not introduce a list or explanation the way a colon does after a complete sentence.",
          "\"and:\" is not the right punctuation here."
        ]
      }
    ],
    "bank": [
      {
        "q": "We needed the following supplies___ tape, scissors, and glue.",
        "o": [
          ",",
          ":",
          ";",
          "like:"
        ],
        "a": 1,
        "why": "The first clause is a complete sentence introducing a list, so a colon is correct.",
        "wx": [
          "\",\" is not the right punctuation here.",
          "",
          "A semicolon does not introduce a list or explanation the way a colon does after a complete sentence.",
          "A colon should not follow \"like\" or \"such as,\" because that is not the end of a complete sentence."
        ]
      },
      {
        "q": "Places I want to visit include: Peru, Kenya, and Iceland. The colon is",
        "o": [
          "correct, because a list follows",
          "incorrect, because \"include\" does not end a complete thought",
          "required after every \"include\"",
          "interchangeable with a semicolon"
        ],
        "a": 1,
        "why": "If you stop at the colon, \"Places I want to visit include\" is incomplete, so the colon is incorrect.",
        "wx": [
          "\"correct, because a list follows\" is not the problem, or not the right fix, in this sentence.",
          "",
          "\"required after every \"include\"\" is not the problem, or not the right fix, in this sentence.",
          "\"interchangeable with a semicolon\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "Her motto was easy to remember___ finish what you start.",
        "o": [
          ",",
          ":",
          "and",
          "like:"
        ],
        "a": 1,
        "why": "A complete clause is followed by an explanation, which a colon may introduce.",
        "wx": [
          "\",\" is not the right punctuation here.",
          "",
          "\"and\" is not the right punctuation here.",
          "A colon should not follow \"like\" or \"such as,\" because that is not the end of a complete sentence."
        ]
      },
      {
        "q": "The announcement named the winner___ Jordan Hale.",
        "o": [
          ",",
          ":",
          "of",
          "who:"
        ],
        "a": 1,
        "why": "The first clause is complete, and the colon introduces the identified winner.",
        "wx": [
          "\",\" is not the right punctuation here.",
          "",
          "\"of\" is not the right punctuation here.",
          "\"who:\" is not the right punctuation here."
        ]
      },
      {
        "q": "Which sentence is correctly punctuated?",
        "o": [
          "Bring: water, a map, and a flashlight.",
          "Bring these items: water, a map, and a flashlight.",
          "Bring these items; water, a map, and a flashlight.",
          "Bring these items, water, a map and: a flashlight."
        ],
        "a": 1,
        "why": "\"Bring these items\" is a complete thought and may be followed by a colon and a list. \"Bring:\" is not a complete thought.",
        "wx": [
          "A colon can be used only after a complete sentence, to introduce a list, explanation, or example. This version breaks that rule.",
          "",
          "A colon can be used only after a complete sentence, to introduce a list, explanation, or example. This version breaks that rule.",
          "A colon can be used only after a complete sentence, to introduce a list, explanation, or example. This version breaks that rule."
        ]
      },
      {
        "q": "There is one rule left to review___ a colon must follow a complete sentence.",
        "o": [
          ",",
          ":",
          "such as",
          "like"
        ],
        "a": 1,
        "why": "The first clause is complete, and the colon introduces the explanation of that rule.",
        "wx": [
          "\",\" is not the right punctuation here.",
          "",
          "\"such as\" is not the right punctuation here.",
          "\"like\" is not the right punctuation here."
        ]
      }
    ]
  },
  {
    "id": "modifier",
    "part": 1,
    "source": "A#9",
    "title": "Modifiers must be next to what they are modifying",
    "rule": "A modifier must sit next to the word or phrase it describes. When a sentence begins with a modifying phrase, that phrase must be immediately followed by a comma and then the noun it describes (otherwise the result is a dangling modifier). A misplaced modifier is a descriptive phrase that is not close enough to the thing it is supposed to describe, so it seems to refer to the wrong thing.",
    "trap": "Letting the noun right after a comma be something the opener does not actually describe, or placing a descriptive phrase next to the wrong word later in the sentence.",
    "before": "A determined writer, Jessica's goal is to get her first novel published this year.",
    "after": "A determined writer, Jessica has a goal of getting her first novel published this year.",
    "qs": [
      {
        "q": "A determined writer, Jessica's goal is to get her first novel published this year. The error is that",
        "o": [
          "the modifier is too long",
          "the noun after the comma is \"Jessica's goal,\" not Jessica",
          "the sentence needs a semicolon",
          "\"determined\" should be an adverb"
        ],
        "a": 1,
        "why": "The introductory phrase describes Jessica, so \"Jessica,\" not \"Jessica's goal,\" must come right after the comma.",
        "wx": [
          "\"the modifier is too long\" is not the real problem here. A describing phrase has to sit right next to the thing it describes, and an opening modifier describes the noun right after the comma.",
          "",
          "\"the sentence needs a semicolon\" is not the real problem here. A describing phrase has to sit right next to the thing it describes, and an opening modifier describes the noun right after the comma.",
          "\"\"determined\" should be an adverb\" is not the real problem here. A describing phrase has to sit right next to the thing it describes, and an opening modifier describes the noun right after the comma."
        ]
      },
      {
        "q": "Which revision fixes the dangling modifier?",
        "o": [
          "A determined writer, Jessica's goal is to get published.",
          "A determined writer, Jessica has a goal of getting her first novel published this year.",
          "A determined writer Jessica's goal, is to get published.",
          "A determined writer; Jessica has a goal of getting published."
        ],
        "a": 1,
        "why": "The noun being described, Jessica, must come immediately after the introductory modifier.",
        "wx": [
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun.",
          "",
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun.",
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun."
        ]
      },
      {
        "q": "Coating the sidewalk, we trudged through the heavy snow. The sentence seems to say that",
        "o": [
          "the snow coated the sidewalk",
          "we were coating the sidewalk",
          "the sidewalk trudged",
          "the comma is optional"
        ],
        "a": 1,
        "why": "The word after the comma is \"we,\" so the opener wrongly describes \"we.\" The snow, not we, was coating the sidewalk.",
        "wx": [
          "\"the snow coated the sidewalk\" is not the real problem here. A describing phrase has to sit right next to the thing it describes, and an opening modifier describes the noun right after the comma.",
          "",
          "\"the sidewalk trudged\" is not the real problem here. A describing phrase has to sit right next to the thing it describes, and an opening modifier describes the noun right after the comma.",
          "\"the comma is optional\" is not the real problem here. A describing phrase has to sit right next to the thing it describes, and an opening modifier describes the noun right after the comma."
        ]
      },
      {
        "q": "Which sentence is correctly written?",
        "o": [
          "Coating the sidewalk, we trudged through the heavy snow.",
          "We trudged through the heavy snow coating the sidewalk.",
          "Coating the sidewalk we, trudged through the heavy snow.",
          "We, coating the sidewalk trudged through the heavy snow."
        ],
        "a": 1,
        "why": "The modifier \"coating the sidewalk\" must sit next to \"snow,\" the thing it actually describes.",
        "wx": [
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun.",
          "",
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun.",
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun."
        ]
      },
      {
        "q": "Long and tangled, it was difficult to comb the child's hair. The best revision is",
        "o": [
          "Long and tangled, it was difficult to comb the child's hair.",
          "Long and tangled, the child's hair was difficult to comb.",
          "It was, long and tangled, difficult to comb.",
          "Long and tangled; the child's hair was difficult to comb."
        ],
        "a": 1,
        "why": "The hair, not \"it\" as a vague subject, is what is long and tangled, so \"the child's hair\" must follow the comma.",
        "wx": [
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun.",
          "",
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun.",
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun."
        ]
      },
      {
        "q": "Exhausted and weak, the soldiers' uniforms were covered in frost. The sentence wrongly suggests that",
        "o": [
          "the soldiers were exhausted",
          "the uniforms were exhausted and weak",
          "frost is a modifier",
          "the comma should be a dash"
        ],
        "a": 1,
        "why": "The noun after the comma is \"uniforms,\" so the opener seems to describe the uniforms. The soldiers are the ones who were exhausted and weak.",
        "wx": [
          "\"the soldiers were exhausted\" is not the real problem here. A describing phrase has to sit right next to the thing it describes, and an opening modifier describes the noun right after the comma.",
          "",
          "\"frost is a modifier\" is not the real problem here. A describing phrase has to sit right next to the thing it describes, and an opening modifier describes the noun right after the comma.",
          "\"the comma should be a dash\" is not the real problem here. A describing phrase has to sit right next to the thing it describes, and an opening modifier describes the noun right after the comma."
        ]
      },
      {
        "q": "The jacket was too small on the sale rack. The intended meaning is best written as",
        "o": [
          "The jacket was too small on the sale rack.",
          "The jacket on the sale rack was too small.",
          "On the sale rack was too small the jacket.",
          "The jacket was, on the sale rack, too small only."
        ],
        "a": 1,
        "why": "\"On the sale rack\" should sit next to \"jacket,\" which is what is on the rack, not next to \"too small.\"",
        "wx": [
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun.",
          "",
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun.",
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun."
        ]
      },
      {
        "q": "Ray wore his one-collared shirt to the job interview, which was stained with mustard. The clause \"which was stained with mustard\" should be next to",
        "o": [
          "the job interview",
          "his shirt",
          "Ray",
          "mustard"
        ],
        "a": 1,
        "why": "The shirt, not the interview, was stained. Move the modifier next to \"shirt.\"",
        "wx": [
          "\"the job interview\" is not the real problem here. A describing phrase has to sit right next to the thing it describes, and an opening modifier describes the noun right after the comma.",
          "",
          "\"Ray\" is not the real problem here. A describing phrase has to sit right next to the thing it describes, and an opening modifier describes the noun right after the comma.",
          "\"mustard\" is not the real problem here. A describing phrase has to sit right next to the thing it describes, and an opening modifier describes the noun right after the comma."
        ]
      },
      {
        "q": "Which sentence places the modifier correctly?",
        "o": [
          "She handed out brownies to children wrapped in foil.",
          "She handed out brownies wrapped in foil to children.",
          "Wrapped in foil, children were handed brownies.",
          "She handed out brownies to children, wrapped in foil they were."
        ],
        "a": 1,
        "why": "The brownies, not the children, were wrapped in foil, so \"wrapped in foil\" must sit next to \"brownies.\"",
        "wx": [
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun.",
          "",
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun.",
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun."
        ]
      },
      {
        "q": "Barred from attending school as a child, the science fiction of Begum Rokeya imagined a better world. The modifier should be followed by",
        "o": [
          "the science fiction",
          "Begum Rokeya",
          "a better world",
          "school"
        ],
        "a": 1,
        "why": "Begum Rokeya, not her science fiction, was barred from school, so her name must come right after the introductory phrase.",
        "wx": [
          "\"the science fiction\" is not the real problem here. A describing phrase has to sit right next to the thing it describes, and an opening modifier describes the noun right after the comma.",
          "",
          "\"a better world\" is not the real problem here. A describing phrase has to sit right next to the thing it describes, and an opening modifier describes the noun right after the comma.",
          "\"school\" is not the real problem here. A describing phrase has to sit right next to the thing it describes, and an opening modifier describes the noun right after the comma."
        ]
      },
      {
        "q": "Walking home, the rain soaked my coat. The best revision is",
        "o": [
          "Walking home, the rain soaked my coat.",
          "Walking home, I was soaked by the rain.",
          "The rain, walking home, soaked my coat.",
          "Walking home; the rain soaked my coat."
        ],
        "a": 1,
        "why": "\"Walking home\" describes the speaker, so \"I\" must follow the comma.",
        "wx": [
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun.",
          "",
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun.",
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun."
        ]
      },
      {
        "q": "To win the prize, hard work is required. The best revision is",
        "o": [
          "To win the prize, hard work is required.",
          "To win the prize, you must work hard.",
          "Hard work, to win the prize is required.",
          "To win the prize; hard work is required."
        ],
        "a": 1,
        "why": "The infinitive phrase describes the person who wants to win, so a person (\"you\") should follow the comma.",
        "wx": [
          "\"To win the prize, hard work is required.\" is not the real problem here. A describing phrase has to sit right next to the thing it describes, and an opening modifier describes the noun right after the comma.",
          "",
          "\"Hard work, to win the prize is required.\" is not the real problem here. A describing phrase has to sit right next to the thing it describes, and an opening modifier describes the noun right after the comma.",
          "\"To win the prize; hard work is required.\" is not the real problem here. A describing phrase has to sit right next to the thing it describes, and an opening modifier describes the noun right after the comma."
        ]
      }
    ],
    "bank": [
      {
        "q": "The waiter served steak to the customer covered in pepper. The intended meaning is best written as",
        "o": [
          "The waiter served steak to the customer covered in pepper.",
          "The waiter served steak covered in pepper to the customer.",
          "Covered in pepper, the customer was served steak.",
          "The waiter, covered in pepper, served steak to the customer only if the waiter was seasoned."
        ],
        "a": 1,
        "why": "The steak, not the customer, was covered in pepper, so the modifier belongs next to \"steak.\"",
        "wx": [
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun.",
          "",
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun.",
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun."
        ]
      },
      {
        "q": "Hoping to catch the bus, the backpack was slung over my shoulder. The error is a",
        "o": [
          "comma splice",
          "dangling modifier: the backpack was not hoping",
          "missing colon",
          "plural apostrophe"
        ],
        "a": 1,
        "why": "The opener describes the speaker, not the backpack. A person should follow the comma.",
        "wx": [
          "\"comma splice\" is not the real problem here. A describing phrase has to sit right next to the thing it describes, and an opening modifier describes the noun right after the comma.",
          "",
          "\"missing colon\" is not the real problem here. A describing phrase has to sit right next to the thing it describes, and an opening modifier describes the noun right after the comma.",
          "\"plural apostrophe\" is not the real problem here. A describing phrase has to sit right next to the thing it describes, and an opening modifier describes the noun right after the comma."
        ]
      },
      {
        "q": "I found a photograph of my parents in the attic that was badly faded. \"That was badly faded\" should sit next to",
        "o": [
          "my parents",
          "the photograph",
          "the attic",
          "I"
        ],
        "a": 1,
        "why": "The photograph, not the parents or the attic, was faded, so the clause should follow \"photograph.\"",
        "wx": [
          "\"my parents\" is not the real problem here. A describing phrase has to sit right next to the thing it describes, and an opening modifier describes the noun right after the comma.",
          "",
          "\"the attic\" is not the real problem here. A describing phrase has to sit right next to the thing it describes, and an opening modifier describes the noun right after the comma.",
          "\"I\" is not the real problem here. A describing phrase has to sit right next to the thing it describes, and an opening modifier describes the noun right after the comma."
        ]
      },
      {
        "q": "While still a student, the novel was drafted in late nights at the library. The best revision is",
        "o": [
          "While still a student, the novel was drafted in late nights at the library.",
          "While still a student, she drafted the novel in late nights at the library.",
          "The novel, while still a student, was drafted in late nights at the library.",
          "While still a student; the novel was drafted in late nights at the library."
        ],
        "a": 1,
        "why": "The student, not the novel, was still a student, so \"she\" (or the author's name) must follow the comma.",
        "wx": [
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun.",
          "",
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun.",
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun."
        ]
      },
      {
        "q": "The bench was reserved for guests with a broken slat. The intended meaning is best written as",
        "o": [
          "The bench was reserved for guests with a broken slat.",
          "The bench with a broken slat was reserved for guests.",
          "With a broken slat, guests had a reserved bench.",
          "The bench was reserved, for guests with a broken slat only, yesterday."
        ],
        "a": 1,
        "why": "The bench, not the guests, has a broken slat, so the modifier belongs next to \"bench.\"",
        "wx": [
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun.",
          "",
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun.",
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun."
        ]
      },
      {
        "q": "Running down the stairs, the vase slipped from my hands. The best revision is",
        "o": [
          "Running down the stairs, the vase slipped from my hands.",
          "Running down the stairs, I let the vase slip from my hands.",
          "The vase, running down the stairs, slipped from my hands.",
          "Running down the stairs; the vase slipped from my hands."
        ],
        "a": 1,
        "why": "\"Running down the stairs\" describes the speaker, so \"I\" must come right after the comma.",
        "wx": [
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun.",
          "",
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun.",
          "In this wording, the describing phrase is not right next to the thing it is supposed to describe, so it dangles or looks like it modifies the wrong noun."
        ]
      }
    ]
  },
  {
    "id": "combine",
    "part": 2,
    "source": "B",
    "title": "Combining simple sentences",
    "rule": "To write with concision, combine simple or related sentences into one. If both sentences talk about the same person, place, thing, or concept, make one sentence a dependent clause of the other through that repeated noun. If they describe a chronological sequence, use prepositions such as before, after, and following. If one sentence defines the other, insert whatever is being defined into the defining sentence. You may shift word order.",
    "trap": "Leaving two short related sentences side by side when they share a noun, a sequence, or a definition, or combining them in a way that leaves the relationship unclear.",
    "before": "The voting rate has not decreased among uneducated citizens. Uneducated voters continue to vote for better schools.",
    "after": "The voting rate has not decreased among uneducated citizens, who continue to vote for better schools.",
    "qs": [
      {
        "q": "The voting rate has not decreased among uneducated citizens. Uneducated voters continue to vote for better schools. The best combination is",
        "o": [
          "The voting rate has not decreased among uneducated citizens, who continue to vote for better schools.",
          "The voting rate has not decreased among uneducated citizens; uneducated citizens the voters continue.",
          "Uneducated citizens the voting rate has not decreased, they continue to vote.",
          "The voting rate has not decreased among uneducated citizens uneducated voters continue."
        ],
        "a": 0,
        "why": "Both sentences are about uneducated citizens/voters, so one becomes a relative clause attached through that repeated noun.",
        "wx": [
          "",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them."
        ]
      },
      {
        "q": "Young musicians perfect their skills in conservatory training. After this, they can start careers in local orchestras. The best combination is",
        "o": [
          "Young musicians perfect their skills in conservatory training they can start careers.",
          "After perfecting their skills through conservatory training, young musicians can start their careers in local orchestras.",
          "After this young musicians perfect their skills, they can start careers.",
          "Young musicians, after this, perfect their skills and after this start careers."
        ],
        "a": 1,
        "why": "The sentences describe a sequence, so \"After\" turns the first into a dependent clause of the second.",
        "wx": [
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them."
        ]
      },
      {
        "q": "The conclusion scientists came to is the idea that matter is made of one-dimensional objects called strings. This is string theory. The best combination is",
        "o": [
          "The conclusion scientists came to is string theory, the idea that matter is made of one-dimensional objects called strings.",
          "This is string theory the conclusion scientists came to is the idea.",
          "The conclusion scientists came to is the idea; this is, string theory, called strings.",
          "String theory this is the idea the conclusion scientists came to."
        ],
        "a": 0,
        "why": "One sentence defines the other, so the term being defined (\"string theory\") is inserted into the defining sentence.",
        "wx": [
          "",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them."
        ]
      },
      {
        "q": "The mayor announced a new recycling plan. The plan will start in June. The best combination is",
        "o": [
          "The mayor announced a new recycling plan, which will start in June.",
          "The mayor announced a new recycling plan the plan will start in June.",
          "The mayor announced a new recycling plan; plan starting June.",
          "The plan, the mayor announced a new recycling plan will start in June."
        ],
        "a": 0,
        "why": "Both sentences are about the plan, so the second becomes a relative clause.",
        "wx": [
          "",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them."
        ]
      },
      {
        "q": "The clay must dry overnight. Then the students can glaze the bowls. The best combination is",
        "o": [
          "The clay must dry overnight the students can glaze the bowls.",
          "After the clay dries overnight, the students can glaze the bowls.",
          "Then the clay must dry overnight, the students can glaze the bowls.",
          "The clay must dry overnight; then after, students glazing."
        ],
        "a": 1,
        "why": "The sentences are in sequence, so \"After\" combines them clearly.",
        "wx": [
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them."
        ]
      },
      {
        "q": "Helio is a nearby cafe. It is a narrow shop that serves only espresso and pastry. The best combination is",
        "o": [
          "Helio is a nearby cafe it is a narrow shop that serves only espresso and pastry.",
          "Helio, a narrow shop that serves only espresso and pastry, is a nearby cafe.",
          "Helio is a nearby cafe; a narrow shop, only espresso.",
          "A narrow shop Helio is a nearby cafe that serves only."
        ],
        "a": 1,
        "why": "The second sentence defines Helio, so that description can be inserted as an appositive.",
        "wx": [
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them."
        ]
      },
      {
        "q": "The team ran a third trial. The team then compared the new data with the first two runs. The best combination is",
        "o": [
          "The team ran a third trial and then compared the new data with the first two runs.",
          "The team ran a third trial the team then compared the new data.",
          "Then the team ran a third trial, compared.",
          "The team ran a third trial; team then compared."
        ],
        "a": 0,
        "why": "The same subject performs two sequential actions, which can be combined into one sentence with \"and then.\"",
        "wx": [
          "",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them."
        ]
      },
      {
        "q": "Photosynthesis is the process by which plants make food from light. This process sustains nearly every food chain. The best combination is",
        "o": [
          "Photosynthesis, the process by which plants make food from light, sustains nearly every food chain.",
          "This process photosynthesis is the process by which plants make food from light sustains.",
          "Photosynthesis is the process by which plants make food from light this process sustains nearly every food chain.",
          "Sustains nearly every food chain photosynthesis the process."
        ],
        "a": 0,
        "why": "The second sentence refers to the same process, so the definition can be inserted and the later verb attached.",
        "wx": [
          "",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them."
        ]
      },
      {
        "q": "The letters were catalogued. After that, they were stored in acid-free boxes. The best combination is",
        "o": [
          "The letters were catalogued they were stored in acid-free boxes.",
          "After being catalogued, the letters were stored in acid-free boxes.",
          "After that the letters were catalogued, stored.",
          "The letters were catalogued; after that stored."
        ],
        "a": 1,
        "why": "A chronological \"after\" clause combines the two steps cleanly.",
        "wx": [
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them."
        ]
      },
      {
        "q": "Mira is the intern. Mira designed the flyer for the fundraiser. The best combination is",
        "o": [
          "Mira is the intern Mira designed the flyer.",
          "Mira, the intern, designed the flyer for the fundraiser.",
          "The intern Mira is the intern designed the flyer.",
          "Mira is the intern; Mira, designed the flyer for the fundraiser."
        ],
        "a": 1,
        "why": "The first sentence defines Mira, so \"the intern\" can be inserted as an appositive.",
        "wx": [
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them."
        ]
      },
      {
        "q": "The bakery opens at six. The bakery sells out of sourdough by nine. The best combination is",
        "o": [
          "The bakery opens at six and sells out of sourdough by nine.",
          "The bakery opens at six the bakery sells out of sourdough by nine.",
          "Opening at six the bakery, sells out of sourdough by nine it does.",
          "The bakery opens at six; bakery sells out."
        ],
        "a": 0,
        "why": "The same subject does two related actions, which combine naturally with \"and.\"",
        "wx": [
          "",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them."
        ]
      },
      {
        "q": "The law set a new speed limit. The limit applies only in school zones. The best combination is",
        "o": [
          "The law set a new speed limit the limit applies only in school zones.",
          "The law set a new speed limit that applies only in school zones.",
          "The law set a new speed limit; limit only school zones.",
          "Applying only in school zones the law set a new speed limit the limit."
        ],
        "a": 1,
        "why": "Both sentences are about the limit, so the second becomes a relative clause.",
        "wx": [
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them."
        ]
      }
    ],
    "bank": [
      {
        "q": "The clock tower was restored in 2019. It now keeps accurate time. The best combination is",
        "o": [
          "The clock tower was restored in 2019, and it now keeps accurate time.",
          "The clock tower was restored in 2019 it now keeps accurate time.",
          "Restored in 2019 it now, the clock tower keeps.",
          "The clock tower was restored in 2019; now it, keeps accurate time only."
        ],
        "a": 0,
        "why": "The two sentences share the tower and can be joined with a conjunction (or a relative clause) into one concise sentence.",
        "wx": [
          "",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them."
        ]
      },
      {
        "q": "The roots take up water. Then the leaves release it as vapor. The best combination is",
        "o": [
          "The roots take up water the leaves release it as vapor.",
          "After the roots take up water, the leaves release it as vapor.",
          "Then the roots take up water, the leaves release it.",
          "The roots take up water; then leaves, release it as vapor."
        ],
        "a": 1,
        "why": "Sequence is best shown with \"After.\"",
        "wx": [
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them."
        ]
      },
      {
        "q": "A sonnet is a fourteen-line poem. Shakespeare wrote many of them. The best combination is",
        "o": [
          "A sonnet is a fourteen-line poem Shakespeare wrote many of them.",
          "Shakespeare wrote many sonnets, fourteen-line poems.",
          "A sonnet is a fourteen-line poem; Shakespeare, wrote many.",
          "Fourteen-line poem a sonnet is Shakespeare wrote many."
        ],
        "a": 1,
        "why": "The definition can be inserted next to the word being defined.",
        "wx": [
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them."
        ]
      },
      {
        "q": "The chemist heated the sample. The chemist recorded the color change. The best combination is",
        "o": [
          "The chemist heated the sample and recorded the color change.",
          "The chemist heated the sample the chemist recorded the color change.",
          "Heating the sample the chemist, recorded.",
          "The chemist heated the sample; chemist recorded."
        ],
        "a": 0,
        "why": "The same subject performs two actions, which combine with \"and.\"",
        "wx": [
          "",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them."
        ]
      },
      {
        "q": "The island has no permanent residents. The island is a sanctuary for seabirds. The best combination is",
        "o": [
          "The island has no permanent residents the island is a sanctuary for seabirds.",
          "The island, which has no permanent residents, is a sanctuary for seabirds.",
          "Having no permanent residents the island is, a sanctuary.",
          "The island has no permanent residents; island sanctuary."
        ],
        "a": 1,
        "why": "A relative clause attaches the shared subject's first idea to the second sentence.",
        "wx": [
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them."
        ]
      },
      {
        "q": "First the dough must rise. After this, it is shaped into loaves. The best combination is",
        "o": [
          "First the dough must rise it is shaped into loaves.",
          "After the dough rises, it is shaped into loaves.",
          "After this the dough must rise, shaped.",
          "The dough must rise; after this shaped into loaves."
        ],
        "a": 1,
        "why": "\"After\" turns the first step into a dependent clause.",
        "wx": [
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them.",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them."
        ]
      }
    ]
  },
  {
    "id": "transitions",
    "part": 2,
    "source": "B",
    "title": "Transitions: cause, effect, explanation, and example",
    "rule": "Conjunctions and conjunctive adverbs can link events in a cause-and-effect relationship. Because means what has just been said is true as a consequence of what is about to be said. Therefore and hence mean it follows from what has just been said. For example and for instance introduce evidence that backs up the previous argument. Whereby means by which, or by means of the idea just mentioned. Consequently means directly following the thing that has just been described.",
    "trap": "Using a contrast word such as \"however\" or \"just as\" when the second idea is actually a result, an explanation, or an example of the first.",
    "before": "Recent advances in medicine include a new MRI technique for detecting heart damage in chemotherapy patients. However, doctors will be able to see heart defects earlier and more effectively.",
    "after": "Recent advances in medicine include a new MRI technique for detecting heart damage in chemotherapy patients. Consequently, doctors will be able to see heart defects earlier and more effectively.",
    "qs": [
      {
        "q": "Recent advances include a new MRI technique for detecting heart damage. ___, doctors will be able to see heart defects earlier.",
        "o": [
          "However",
          "Consequently",
          "On the other hand",
          "Nevertheless"
        ],
        "a": 1,
        "why": "Doctors can see better as a result of the new test, so \"Consequently\" shows cause and effect.",
        "wx": [
          "\"However\" signals contrast, which is not the relationship between these two ideas.",
          "",
          "\"On the other hand\" signals contrast, which is not the relationship between these two ideas.",
          "\"Nevertheless\" signals contrast, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "___ archaeologists have unearthed several well-preserved dwellings, we are getting new insight into domestic life 3,000 years ago.",
        "o": [
          "Not only",
          "Because",
          "However",
          "Whereas"
        ],
        "a": 1,
        "why": "The insight is a result of the dwellings being unearthed, so \"Because\" is the right link.",
        "wx": [
          "\"Not only\" signals addition or similarity, which is not the relationship between these two ideas.",
          "",
          "\"However\" signals contrast, which is not the relationship between these two ideas.",
          "\"Whereas\" signals contrast, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "Foreshadowing, a literary technique ___ an author hints at what will happen later, is a useful tool for setting the atmosphere.",
        "o": [
          "when",
          "whereby",
          "however",
          "nevertheless"
        ],
        "a": 1,
        "why": "An author hints by means of foreshadowing, so \"whereby\" is the precise word.",
        "wx": [
          "\"when\" does not match the logical relationship between the two ideas.",
          "",
          "\"however\" signals contrast, which is not the relationship between these two ideas.",
          "\"nevertheless\" signals contrast, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "The river was diverted. ___, nearby farms lost their usual floodplain soil.",
        "o": [
          "For example",
          "However",
          "Therefore",
          "On the one hand"
        ],
        "a": 2,
        "why": "\"Therefore\" shows that the farms' loss follows from the diversion.",
        "wx": [
          "\"For example\" signals an example, which is not the relationship between these two ideas.",
          "\"However\" signals contrast, which is not the relationship between these two ideas.",
          "",
          "\"On the one hand\" does not match the logical relationship between the two ideas."
        ]
      },
      {
        "q": "The study found a sharp drop in night insects. ___, moth counts fell by half in three years.",
        "o": [
          "For example",
          "Nevertheless",
          "On the other hand",
          "Whereas"
        ],
        "a": 0,
        "why": "\"For example\" introduces evidence that backs up the previous claim.",
        "wx": [
          "",
          "\"Nevertheless\" signals contrast, which is not the relationship between these two ideas.",
          "\"On the other hand\" signals contrast, which is not the relationship between these two ideas.",
          "\"Whereas\" signals contrast, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "The furnace failed at dawn. ___, the pipes froze before noon.",
        "o": [
          "Consequently",
          "However",
          "Whereas",
          "On the other hand"
        ],
        "a": 0,
        "why": "The freezing follows directly from the furnace failure, so \"Consequently\" is the cause-and-effect link.",
        "wx": [
          "",
          "\"However\" signals contrast, which is not the relationship between these two ideas.",
          "\"Whereas\" signals contrast, which is not the relationship between these two ideas.",
          "\"On the other hand\" signals contrast, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "The software stores each change in a log, ___ later editors can see who revised a line.",
        "o": [
          "however",
          "so that",
          "nevertheless",
          "whereas"
        ],
        "a": 1,
        "why": "\"So that\" presents the intended result of keeping the log.",
        "wx": [
          "\"however\" signals contrast, which is not the relationship between these two ideas.",
          "",
          "\"nevertheless\" signals contrast, which is not the relationship between these two ideas.",
          "\"whereas\" signals contrast, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "Demand rose suddenly; ___, prices increased the same week.",
        "o": [
          "on the other hand",
          "hence",
          "however",
          "nevertheless"
        ],
        "a": 1,
        "why": "\"Hence\" means it follows from what has just been said.",
        "wx": [
          "\"on the other hand\" signals contrast, which is not the relationship between these two ideas.",
          "",
          "\"however\" signals contrast, which is not the relationship between these two ideas.",
          "\"nevertheless\" signals contrast, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "The town reduced street lighting. ___, residents reported darker sidewalks and fewer late-night shoppers.",
        "o": [
          "In spite of this",
          "For instance",
          "On the other hand",
          "Whereas"
        ],
        "a": 1,
        "why": "\"For instance\" (like \"for example\") introduces specific evidence of the previous claim.",
        "wx": [
          "\"In spite of this\" does not match the logical relationship between the two ideas.",
          "",
          "\"On the other hand\" signals contrast, which is not the relationship between these two ideas.",
          "\"Whereas\" signals contrast, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "___ the bridge was closed, buses were rerouted through the side streets.",
        "o": [
          "Because",
          "However",
          "Whereas",
          "Nevertheless"
        ],
        "a": 0,
        "why": "The rerouting is a result of the closure, so \"Because\" is the correct cause-and-effect link.",
        "wx": [
          "",
          "\"However\" signals contrast, which is not the relationship between these two ideas.",
          "\"Whereas\" signals contrast, which is not the relationship between these two ideas.",
          "\"Nevertheless\" signals contrast, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "A catalyst is a substance ___ a reaction proceeds faster without the substance being used up.",
        "o": [
          "however",
          "whereby",
          "nevertheless",
          "on the other hand"
        ],
        "a": 1,
        "why": "\"Whereby\" means by which, or by means of the idea just mentioned.",
        "wx": [
          "\"however\" signals contrast, which is not the relationship between these two ideas.",
          "",
          "\"nevertheless\" signals contrast, which is not the relationship between these two ideas.",
          "\"on the other hand\" signals contrast, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "The experiment used a larger sample. ___, the results were more reliable than last year's.",
        "o": [
          "However",
          "Therefore",
          "On the other hand",
          "Whereas"
        ],
        "a": 1,
        "why": "More reliable results follow from the larger sample, so \"Therefore\" is the logical link.",
        "wx": [
          "\"However\" signals contrast, which is not the relationship between these two ideas.",
          "",
          "\"On the other hand\" signals contrast, which is not the relationship between these two ideas.",
          "\"Whereas\" signals contrast, which is not the relationship between these two ideas."
        ]
      }
    ],
    "bank": [
      {
        "q": "The battery died. ___, the recording stopped in the middle of the interview.",
        "o": [
          "Nevertheless",
          "Consequently",
          "However",
          "Whereas"
        ],
        "a": 1,
        "why": "The recording stopped as a direct result of the battery dying.",
        "wx": [
          "\"Nevertheless\" signals contrast, which is not the relationship between these two ideas.",
          "",
          "\"However\" signals contrast, which is not the relationship between these two ideas.",
          "\"Whereas\" signals contrast, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "___ the lab lost power, the samples were moved to a backup freezer.",
        "o": [
          "However",
          "Because",
          "Whereas",
          "Nevertheless"
        ],
        "a": 1,
        "why": "The move happened as a consequence of the power loss, so \"Because\" is correct.",
        "wx": [
          "\"However\" signals contrast, which is not the relationship between these two ideas.",
          "",
          "\"Whereas\" signals contrast, which is not the relationship between these two ideas.",
          "\"Nevertheless\" signals contrast, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "The pamphlet lists several risk factors. ___, smoking and high blood pressure are discussed at length.",
        "o": [
          "For example",
          "However",
          "On the other hand",
          "Nevertheless"
        ],
        "a": 0,
        "why": "\"For example\" introduces evidence that supports the previous sentence.",
        "wx": [
          "",
          "\"However\" signals contrast, which is not the relationship between these two ideas.",
          "\"On the other hand\" signals contrast, which is not the relationship between these two ideas.",
          "\"Nevertheless\" signals contrast, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "She trained for months; ___, she finished the marathon in under four hours.",
        "o": [
          "however",
          "therefore",
          "on the other hand",
          "nevertheless"
        ],
        "a": 1,
        "why": "The finishing time follows from the training, so \"therefore\" shows the result.",
        "wx": [
          "\"however\" signals contrast, which is not the relationship between these two ideas.",
          "",
          "\"on the other hand\" signals contrast, which is not the relationship between these two ideas.",
          "\"nevertheless\" signals contrast, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "A process ___ waste heat is captured and reused can lower a factory's costs.",
        "o": [
          "however",
          "whereby",
          "nevertheless",
          "whereas"
        ],
        "a": 1,
        "why": "\"Whereby\" means by which the waste heat is captured.",
        "wx": [
          "\"however\" signals contrast, which is not the relationship between these two ideas.",
          "",
          "\"nevertheless\" signals contrast, which is not the relationship between these two ideas.",
          "\"whereas\" signals contrast, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "Tickets sold out in an hour. ___, the organizers added a second show.",
        "o": [
          "On the other hand",
          "Consequently",
          "However",
          "Whereas"
        ],
        "a": 1,
        "why": "The second show is a result of the sellout, so \"Consequently\" is the right transition.",
        "wx": [
          "\"On the other hand\" signals contrast, which is not the relationship between these two ideas.",
          "",
          "\"However\" signals contrast, which is not the relationship between these two ideas.",
          "\"Whereas\" signals contrast, which is not the relationship between these two ideas."
        ]
      }
    ]
  },
  {
    "id": "trans-contra",
    "part": 2,
    "source": "B",
    "title": "Transitions: contradiction or digression",
    "rule": "Some conjunctions describe a negative or opposing relationship. However introduces a statement that contradicts what has just been said. On the one hand / on the other hand present two ideas that oppose each other and always go together. But means despite what has just been said, here is information to the contrary. Nevertheless means in spite of what has just been said. Aside from means the next example is an exception. While and whereas mean in contrast or comparison with the fact that.",
    "trap": "Using a cause-and-effect word such as \"and,\" \"therefore,\" or \"just as\" when the second idea actually contrasts with or qualifies the first.",
    "before": "The pianist had not had nearly enough time to study and practice the sonata, and she played it flawlessly.",
    "after": "The pianist had not had nearly enough time to study and practice the sonata, but she played it flawlessly.",
    "qs": [
      {
        "q": "The pianist had not had nearly enough time to practice, ___ she played the sonata flawlessly.",
        "o": [
          "and",
          "but",
          "therefore",
          "consequently"
        ],
        "a": 1,
        "why": "The flawlessness happened despite the lack of practice, so \"but\" introduces contrary information.",
        "wx": [
          "\"and\" signals addition, which is not the relationship between these two ideas.",
          "",
          "\"therefore\" signals cause and effect, which is not the relationship between these two ideas.",
          "\"consequently\" signals cause and effect, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "___ crayons are generally reserved for young children, professional artists have used them to great effect.",
        "o": [
          "Just as",
          "Though",
          "Therefore",
          "Because"
        ],
        "a": 1,
        "why": "Professional use contrasts with the usual association with children, so \"Though\" is the contrast word.",
        "wx": [
          "\"Just as\" signals similarity, which is not the relationship between these two ideas.",
          "",
          "\"Therefore\" signals cause and effect, which is not the relationship between these two ideas.",
          "\"Because\" signals cause and effect, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "The forecast called for rain. ___, the picnic went ahead as planned.",
        "o": [
          "Therefore",
          "However",
          "Consequently",
          "For example"
        ],
        "a": 1,
        "why": "\"However\" introduces a statement that contrasts with the expected result of rain.",
        "wx": [
          "\"Therefore\" signals cause and effect, which is not the relationship between these two ideas.",
          "",
          "\"Consequently\" signals cause and effect, which is not the relationship between these two ideas.",
          "\"For example\" signals an example, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "___ the rent has risen, ___ wages in the area have stayed almost flat.",
        "o": [
          "Because / therefore",
          "On the one hand / on the other hand",
          "For example / consequently",
          "Just as / likewise"
        ],
        "a": 1,
        "why": "The two ideas oppose each other, and these paired phrases always go together.",
        "wx": [
          "\"Because / therefore\" does not match the logical relationship between the two ideas.",
          "",
          "\"For example / consequently\" does not match the logical relationship between the two ideas.",
          "\"Just as / likewise\" does not match the logical relationship between the two ideas."
        ]
      },
      {
        "q": "The trail is clearly marked. ___, a few hikers still take the wrong fork each year.",
        "o": [
          "Therefore",
          "Nevertheless",
          "Consequently",
          "For instance"
        ],
        "a": 1,
        "why": "\"Nevertheless\" means in spite of what has just been said.",
        "wx": [
          "\"Therefore\" signals cause and effect, which is not the relationship between these two ideas.",
          "",
          "\"Consequently\" signals cause and effect, which is not the relationship between these two ideas.",
          "\"For instance\" signals an example, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "The medicine is effective for most patients. ___ those with a rare allergy, it is widely prescribed.",
        "o": [
          "Because of",
          "Aside from",
          "Therefore for",
          "Just as with"
        ],
        "a": 1,
        "why": "\"Aside from\" introduces an exception to the claim.",
        "wx": [
          "\"Because of\" does not match the logical relationship between the two ideas.",
          "",
          "\"Therefore for\" does not match the logical relationship between the two ideas.",
          "\"Just as with\" does not match the logical relationship between the two ideas."
        ]
      },
      {
        "q": "The north wall is brick, ___ the south wall is glass.",
        "o": [
          "therefore",
          "whereas",
          "consequently",
          "for example"
        ],
        "a": 1,
        "why": "\"Whereas\" sets up a contrast between the two walls.",
        "wx": [
          "\"therefore\" signals cause and effect, which is not the relationship between these two ideas.",
          "",
          "\"consequently\" signals cause and effect, which is not the relationship between these two ideas.",
          "\"for example\" signals an example, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "She had studied the part for months. ___, opening night still made her nervous.",
        "o": [
          "Therefore",
          "Even so",
          "Consequently",
          "For example"
        ],
        "a": 1,
        "why": "\"Even so\" (like \"nevertheless\") introduces a contrasting result.",
        "wx": [
          "\"Therefore\" signals cause and effect, which is not the relationship between these two ideas.",
          "",
          "\"Consequently\" signals cause and effect, which is not the relationship between these two ideas.",
          "\"For example\" signals an example, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "The plan looked inexpensive. ___, hidden fees made it costly in the end.",
        "o": [
          "Hence",
          "But",
          "Consequently",
          "For instance"
        ],
        "a": 1,
        "why": "\"But\" introduces information contrary to the first impression.",
        "wx": [
          "\"Hence\" signals cause and effect, which is not the relationship between these two ideas.",
          "",
          "\"Consequently\" signals cause and effect, which is not the relationship between these two ideas.",
          "\"For instance\" signals an example, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "___ the museum is small, its collection is unusually focused and well documented.",
        "o": [
          "Because",
          "While",
          "Therefore",
          "Consequently"
        ],
        "a": 1,
        "why": "\"While\" introduces a contrast: small size versus a focused collection.",
        "wx": [
          "\"Because\" signals cause and effect, which is not the relationship between these two ideas.",
          "",
          "\"Therefore\" signals cause and effect, which is not the relationship between these two ideas.",
          "\"Consequently\" signals cause and effect, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "The first experiment failed. The second, ___, produced a clear result.",
        "o": [
          "therefore",
          "however",
          "consequently",
          "for example"
        ],
        "a": 1,
        "why": "\"However\" marks a contrast with the first experiment.",
        "wx": [
          "\"therefore\" signals cause and effect, which is not the relationship between these two ideas.",
          "",
          "\"consequently\" signals cause and effect, which is not the relationship between these two ideas.",
          "\"for example\" signals an example, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "He left home late, ___ he arrived before the doors opened.",
        "o": [
          "so",
          "yet",
          "therefore",
          "consequently"
        ],
        "a": 1,
        "why": "\"Yet\" (like \"but\") introduces a contrary outcome.",
        "wx": [
          "\"so\" signals cause and effect, which is not the relationship between these two ideas.",
          "",
          "\"therefore\" signals cause and effect, which is not the relationship between these two ideas.",
          "\"consequently\" signals cause and effect, which is not the relationship between these two ideas."
        ]
      }
    ],
    "bank": [
      {
        "q": "The bridge looks delicate. ___, it has stood for two centuries.",
        "o": [
          "Therefore",
          "Nevertheless",
          "Consequently",
          "For example"
        ],
        "a": 1,
        "why": "\"Nevertheless\" means in spite of the appearance of delicacy.",
        "wx": [
          "\"Therefore\" signals cause and effect, which is not the relationship between these two ideas.",
          "",
          "\"Consequently\" signals cause and effect, which is not the relationship between these two ideas.",
          "\"For example\" signals an example, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "___ cats hunt alone, wolves often hunt in packs.",
        "o": [
          "Because",
          "While",
          "Therefore",
          "Consequently"
        ],
        "a": 1,
        "why": "\"While\" sets up a contrast between the two hunting styles.",
        "wx": [
          "\"Because\" signals cause and effect, which is not the relationship between these two ideas.",
          "",
          "\"Therefore\" signals cause and effect, which is not the relationship between these two ideas.",
          "\"Consequently\" signals cause and effect, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "The software is free. ___, some features require a paid upgrade.",
        "o": [
          "Therefore",
          "However",
          "Consequently",
          "For example"
        ],
        "a": 1,
        "why": "\"However\" introduces a limitation that contrasts with \"free.\"",
        "wx": [
          "\"Therefore\" signals cause and effect, which is not the relationship between these two ideas.",
          "",
          "\"Consequently\" signals cause and effect, which is not the relationship between these two ideas.",
          "\"For example\" signals an example, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "___ many reviewers praised the film, a few found the ending rushed.",
        "o": [
          "Because",
          "Although",
          "Therefore",
          "Consequently"
        ],
        "a": 1,
        "why": "\"Although\" introduces a contrasting minority view.",
        "wx": [
          "\"Because\" signals cause and effect, which is not the relationship between these two ideas.",
          "",
          "\"Therefore\" signals cause and effect, which is not the relationship between these two ideas.",
          "\"Consequently\" signals cause and effect, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "The instructions were posted on every wall. ___, several visitors still went the wrong way.",
        "o": [
          "Therefore",
          "Even so",
          "Consequently",
          "For instance"
        ],
        "a": 1,
        "why": "\"Even so\" shows that the mix-up happened in spite of the signs.",
        "wx": [
          "\"Therefore\" signals cause and effect, which is not the relationship between these two ideas.",
          "",
          "\"Consequently\" signals cause and effect, which is not the relationship between these two ideas.",
          "\"For instance\" signals an example, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "The east garden is formal, ___ the west garden is deliberately wild.",
        "o": [
          "therefore",
          "whereas",
          "consequently",
          "for example"
        ],
        "a": 1,
        "why": "\"Whereas\" contrasts the two gardens.",
        "wx": [
          "\"therefore\" signals cause and effect, which is not the relationship between these two ideas.",
          "",
          "\"consequently\" signals cause and effect, which is not the relationship between these two ideas.",
          "\"for example\" signals an example, which is not the relationship between these two ideas."
        ]
      }
    ]
  },
  {
    "id": "trans-similar",
    "part": 2,
    "source": "B",
    "title": "Transitions: similarity and emphasis",
    "rule": "Some conjunctive adverbs connect things that are equal or similar, or add examples that emphasize the direction of the argument. Moreover means as an additional, potentially more convincing or important, matter. Just as means in comparison to, or similar to. Likewise means in the same way, or also. Not only / but also present two ideas that support and emphasize each other and always go together.",
    "trap": "Using a contrast or result word such as \"hence,\" \"nevertheless,\" or \"however\" when the next idea is actually similar or is an additional point of emphasis.",
    "before": "Investing money is one way to plan for the future. Hence, another good long-term planning option is to take advantage of a retirement savings account.",
    "after": "Investing money is one way to plan for your future. Likewise, another good long-term planning option is to take advantage of a retirement savings account.",
    "qs": [
      {
        "q": "Investing money is one way to plan for the future. ___, another good long-term option is a retirement savings account.",
        "o": [
          "Hence",
          "Likewise",
          "Nevertheless",
          "However"
        ],
        "a": 1,
        "why": "The word \"another\" signals two similar options, so \"Likewise\" is the right link.",
        "wx": [
          "\"Hence\" signals cause and effect, which is not the relationship between these two ideas.",
          "",
          "\"Nevertheless\" signals contrast, which is not the relationship between these two ideas.",
          "\"However\" signals contrast, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "Dressing to attract attention can affect how people perceive you. ___, it can be inappropriate depending on the context.",
        "o": [
          "Nevertheless",
          "Moreover",
          "However",
          "Hence"
        ],
        "a": 1,
        "why": "The inappropriateness is an additional, more significant point, so \"Moreover\" adds emphasis.",
        "wx": [
          "\"Nevertheless\" signals contrast, which is not the relationship between these two ideas.",
          "",
          "\"However\" signals contrast, which is not the relationship between these two ideas.",
          "\"Hence\" signals cause and effect, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "___ the first trial showed a clear pattern, the second trial did as well.",
        "o": [
          "Although",
          "Just as",
          "However",
          "Nevertheless"
        ],
        "a": 1,
        "why": "\"Just as\" compares similar results.",
        "wx": [
          "\"Although\" signals contrast, which is not the relationship between these two ideas.",
          "",
          "\"However\" signals contrast, which is not the relationship between these two ideas.",
          "\"Nevertheless\" signals contrast, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "The park is valued for its trails. It is, ___, an important stopover for migrating birds.",
        "o": [
          "however",
          "moreover",
          "nevertheless",
          "hence"
        ],
        "a": 1,
        "why": "\"Moreover\" adds an additional reason the park matters.",
        "wx": [
          "\"however\" signals contrast, which is not the relationship between these two ideas.",
          "",
          "\"nevertheless\" signals contrast, which is not the relationship between these two ideas.",
          "\"hence\" signals cause and effect, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "___ did the lab confirm the result, ___ a second lab repeated it.",
        "o": [
          "Because / therefore",
          "Not only / but also",
          "Just as / however",
          "On the one hand / on the other hand"
        ],
        "a": 1,
        "why": "The paired \"not only / but also\" presents two supporting, emphasizing ideas and must be used together.",
        "wx": [
          "\"Because / therefore\" does not match the logical relationship between the two ideas.",
          "",
          "\"Just as / however\" does not match the logical relationship between the two ideas.",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them."
        ]
      },
      {
        "q": "The first chapter is brisk and funny. The second chapter is ___ written in a light tone.",
        "o": [
          "nevertheless",
          "likewise",
          "however",
          "hence"
        ],
        "a": 1,
        "why": "\"Likewise\" means in the same way.",
        "wx": [
          "\"nevertheless\" signals contrast, which is not the relationship between these two ideas.",
          "",
          "\"however\" signals contrast, which is not the relationship between these two ideas.",
          "\"hence\" signals cause and effect, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "The museum offers free admission on Tuesdays. ___, students can reserve private tours at no cost.",
        "o": [
          "However",
          "In addition",
          "Nevertheless",
          "On the other hand"
        ],
        "a": 1,
        "why": "\"In addition\" (like \"moreover\") adds a similar benefit.",
        "wx": [
          "\"However\" signals contrast, which is not the relationship between these two ideas.",
          "",
          "\"Nevertheless\" signals contrast, which is not the relationship between these two ideas.",
          "\"On the other hand\" signals contrast, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "___ a sonnet has a tight structure, a villanelle follows a strict pattern of repetition.",
        "o": [
          "Although",
          "Just as",
          "However",
          "Nevertheless"
        ],
        "a": 1,
        "why": "\"Just as\" sets up a similarity between the two forms.",
        "wx": [
          "\"Although\" signals contrast, which is not the relationship between these two ideas.",
          "",
          "\"However\" signals contrast, which is not the relationship between these two ideas.",
          "\"Nevertheless\" signals contrast, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "The new buses are quieter. ___, they produce fewer emissions than the old fleet.",
        "o": [
          "However",
          "Moreover",
          "Nevertheless",
          "On the other hand"
        ],
        "a": 1,
        "why": "\"Moreover\" adds a second, reinforcing advantage.",
        "wx": [
          "\"However\" signals contrast, which is not the relationship between these two ideas.",
          "",
          "\"Nevertheless\" signals contrast, which is not the relationship between these two ideas.",
          "\"On the other hand\" signals contrast, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "The original recording is prized by collectors. Bootleg copies are ___ in demand.",
        "o": [
          "however",
          "likewise",
          "nevertheless",
          "hence not"
        ],
        "a": 1,
        "why": "\"Likewise\" signals that the copies are in demand in the same way.",
        "wx": [
          "\"however\" signals contrast, which is not the relationship between these two ideas.",
          "",
          "\"nevertheless\" signals contrast, which is not the relationship between these two ideas.",
          "\"hence not\" does not match the logical relationship between the two ideas."
        ]
      },
      {
        "q": "The essay argues that the policy is costly. ___, it argues that the policy is unfair.",
        "o": [
          "However",
          "It also / Moreover, it",
          "Nevertheless",
          "On the other hand"
        ],
        "a": 1,
        "why": "The second point supports and emphasizes the argument, so \"Moreover\" (or \"also\") is the additive link.",
        "wx": [
          "\"However\" signals contrast, which is not the relationship between these two ideas.",
          "",
          "\"Nevertheless\" signals contrast, which is not the relationship between these two ideas.",
          "\"On the other hand\" signals contrast, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "___ the kitchen was remodeled last year, the bathrooms were updated at the same time and in the same style.",
        "o": [
          "Although",
          "Just as",
          "However",
          "Nevertheless"
        ],
        "a": 1,
        "why": "\"Just as\" compares two similar updates. Wait - \"Just as the kitchen was remodeled, the bathrooms were updated\" is correct. Good.",
        "wx": [
          "\"Although\" signals contrast, which is not the relationship between these two ideas.",
          "",
          "\"However\" signals contrast, which is not the relationship between these two ideas.",
          "\"Nevertheless\" signals contrast, which is not the relationship between these two ideas."
        ]
      }
    ],
    "bank": [
      {
        "q": "Swimming is easy on the joints. ___, cycling lets many people exercise without heavy impact.",
        "o": [
          "However",
          "Likewise",
          "Nevertheless",
          "On the other hand"
        ],
        "a": 1,
        "why": "\"Likewise\" connects two similar low-impact options.",
        "wx": [
          "\"However\" signals contrast, which is not the relationship between these two ideas.",
          "",
          "\"Nevertheless\" signals contrast, which is not the relationship between these two ideas.",
          "\"On the other hand\" signals contrast, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "The plan would create jobs. ___, it would reduce commute times for thousands of residents.",
        "o": [
          "However",
          "Moreover",
          "Nevertheless",
          "On the other hand"
        ],
        "a": 1,
        "why": "\"Moreover\" adds a second supporting benefit.",
        "wx": [
          "\"However\" signals contrast, which is not the relationship between these two ideas.",
          "",
          "\"Nevertheless\" signals contrast, which is not the relationship between these two ideas.",
          "\"On the other hand\" signals contrast, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "___ the north orchard was replanted, the south orchard was replanted the following season.",
        "o": [
          "Although",
          "Just as",
          "However",
          "Nevertheless"
        ],
        "a": 1,
        "why": "\"Just as\" presents the two plantings as similar, parallel actions.",
        "wx": [
          "\"Although\" signals contrast, which is not the relationship between these two ideas.",
          "",
          "\"However\" signals contrast, which is not the relationship between these two ideas.",
          "\"Nevertheless\" signals contrast, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "The first witness was careful and precise. The second witness was ___ careful in her dates and details.",
        "o": [
          "nevertheless",
          "likewise",
          "however",
          "hence"
        ],
        "a": 1,
        "why": "\"Likewise\" means in the same way.",
        "wx": [
          "\"nevertheless\" signals contrast, which is not the relationship between these two ideas.",
          "",
          "\"however\" signals contrast, which is not the relationship between these two ideas.",
          "\"hence\" signals cause and effect, which is not the relationship between these two ideas."
        ]
      },
      {
        "q": "___ is the building historically important, ___ it is still in daily use as a library.",
        "o": [
          "Because / therefore",
          "Not only / but also",
          "Just as / however",
          "On the one hand / on the other hand"
        ],
        "a": 1,
        "why": "\"Not only / but also\" pairs two reinforcing points.",
        "wx": [
          "\"Because / therefore\" does not match the logical relationship between the two ideas.",
          "",
          "\"Just as / however\" does not match the logical relationship between the two ideas.",
          "This wording does not combine the ideas clearly, or it shows the wrong relationship between them."
        ]
      },
      {
        "q": "The handbook explains the safety rules. ___, it walks through what to do in an emergency.",
        "o": [
          "However",
          "In addition",
          "Nevertheless",
          "On the other hand"
        ],
        "a": 1,
        "why": "\"In addition\" adds a further, similar function of the handbook.",
        "wx": [
          "\"However\" signals contrast, which is not the relationship between these two ideas.",
          "",
          "\"Nevertheless\" signals contrast, which is not the relationship between these two ideas.",
          "\"On the other hand\" signals contrast, which is not the relationship between these two ideas."
        ]
      }
    ]
  },
  {
    "id": "dash",
    "part": 2,
    "source": "B",
    "title": "Using dashes",
    "rule": "Think of dashes as being kind of like parentheses. Dashes separate out a sentence piece that is explanatory but not crucial, like an aside. Sometimes this piece is a digressive thought; sometimes it is a list of examples. Typically the phrase inside the dashes has commas in it, so dashes are the best way to set it off. If the phrase is in the middle of the sentence, it must be surrounded by dashes on both sides.",
    "trap": "Using only one dash around a mid-sentence aside, or using commas when the aside already contains commas and needs dashes on both sides.",
    "before": "The hairstylist picked up the scissors—the kind that usually sit in the jar of blue liquid, and started to snip bits of hair off his client’s head.",
    "after": "The hairstylist picked up the scissors—the kind that usually sit in the jar of blue liquid—and started to snip bits of hair off his client’s head.",
    "qs": [
      {
        "q": "The hairstylist picked up the scissors—the kind that usually sit in the jar of blue liquid, and started to snip. The error is",
        "o": [
          "the list needs semicolons",
          "the mid-sentence aside needs a dash on both sides",
          "a colon is required after \"scissors\"",
          "\"and\" cannot follow a dash"
        ],
        "a": 1,
        "why": "The explanatory phrase is in the middle of the sentence, so it must be surrounded by dashes on both sides.",
        "wx": [
          "\"the list needs semicolons\" is not the problem, or not the right fix, in this sentence.",
          "",
          "\"a colon is required after \"scissors\"\" is not the problem, or not the right fix, in this sentence.",
          "\"\"and\" cannot follow a dash\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "The best concierges have many skills: knowledge of foreign customs, the ability to speak several languages, and a charming manner, that put even shy guests at ease. The best revision uses",
        "o": [
          "commas around the list of skills",
          "dashes around the list of skills, which already contains commas",
          "a semicolon after \"skills\"",
          "no extra punctuation"
        ],
        "a": 1,
        "why": "The list of examples is an aside that already contains commas, so dashes are the best way to set it off on both sides.",
        "wx": [
          "\"commas around the list of skills\" is not the problem, or not the right fix, in this sentence.",
          "",
          "\"a semicolon after \"skills\"\" is not the problem, or not the right fix, in this sentence.",
          "\"no extra punctuation\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "After readers found the errors, all 243 of them— the company issued a reprint. The best revision is",
        "o": [
          "leave the punctuation as it is",
          "After readers found the errors—all 243 of them—the company issued a reprint.",
          "After readers found the errors; all 243 of them; the company issued a reprint.",
          "After readers found the errors, all 243 of them, the company issued, a reprint."
        ],
        "a": 1,
        "why": "The phrase \"all 243 of them\" is a mid-sentence aside and needs a dash on both sides.",
        "wx": [
          "The original punctuation is not correct, so this should not be left as it is.",
          "",
          "This version does not set off the extra, explanatory material with dashes in the right places (a mid-sentence aside needs a dash on both sides).",
          "This version does not set off the extra, explanatory material with dashes in the right places (a mid-sentence aside needs a dash on both sides)."
        ]
      },
      {
        "q": "The old radio—the one with the broken antenna—still works. This punctuation is",
        "o": [
          "incorrect, because dashes cannot surround a phrase",
          "correct: the aside is set off by dashes on both sides",
          "incorrect, because a colon is required",
          "incorrect, because only commas are allowed"
        ],
        "a": 1,
        "why": "A non-crucial explanatory phrase in the middle of a sentence is correctly surrounded by dashes.",
        "wx": [
          "\"incorrect, because dashes cannot surround a phrase\" is not the problem, or not the right fix, in this sentence.",
          "",
          "\"incorrect, because a colon is required\" is not the problem, or not the right fix, in this sentence.",
          "\"incorrect, because only commas are allowed\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "We packed the essentials—water, a map, and a flashlight—before sunrise. The dashes are used to",
        "o": [
          "join two independent clauses",
          "set off an explanatory list of examples",
          "introduce a restrictive clause",
          "replace a missing verb"
        ],
        "a": 1,
        "why": "Dashes set off a list of examples that is helpful but not grammatically required.",
        "wx": [
          "\"join two independent clauses\" is not the right punctuation here.",
          "",
          "\"introduce a restrictive clause\" is not the right punctuation here.",
          "\"replace a missing verb\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "The final clue—hidden in the last footnote, was missed by most readers. The error is",
        "o": [
          "a missing comma after \"clue\"",
          "a missing second dash after \"footnote\"",
          "a needed semicolon after \"clue\"",
          "that dashes cannot set off a phrase"
        ],
        "a": 1,
        "why": "A mid-sentence aside must have a dash on both sides.",
        "wx": [
          "\"a missing comma after \"clue\"\" is not the problem, or not the right fix, in this sentence.",
          "",
          "\"a needed semicolon after \"clue\"\" is not the problem, or not the right fix, in this sentence.",
          "\"that dashes cannot set off a phrase\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "Which sentence about the neighbor is correctly punctuated?",
        "o": [
          "My neighbor—a retired chemist, keeps bees.",
          "My neighbor—a retired chemist—keeps bees.",
          "My neighbor, a retired chemist—keeps bees.",
          "My neighbor—a retired chemist keeps bees."
        ],
        "a": 1,
        "why": "The aside \"a retired chemist\" needs a dash on both sides.",
        "wx": [
          "This version does not set off the extra, explanatory material with dashes in the right places (a mid-sentence aside needs a dash on both sides).",
          "",
          "This version does not set off the extra, explanatory material with dashes in the right places (a mid-sentence aside needs a dash on both sides).",
          "This version does not set off the extra, explanatory material with dashes in the right places (a mid-sentence aside needs a dash on both sides)."
        ]
      },
      {
        "q": "The recipe calls for one unusual step—chilling the dough overnight—before baking. This is",
        "o": [
          "incorrect; a semicolon should follow \"step\"",
          "correct: the explanatory phrase is set off by dashes on both sides",
          "incorrect; the second dash should be a colon",
          "incorrect because a list requires commas only"
        ],
        "a": 1,
        "why": "The explanatory phrase is in the middle and is correctly surrounded by dashes.",
        "wx": [
          "\"incorrect; a semicolon should follow \"step\"\" is not the problem, or not the right fix, in this sentence.",
          "",
          "\"incorrect; the second dash should be a colon\" is not the problem, or not the right fix, in this sentence.",
          "\"incorrect because a list requires commas only\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "She cancelled the trip—the tickets, the hotel, and the tours, and stayed home. The best revision is",
        "o": [
          "leave the punctuation as it is",
          "She cancelled the trip—the tickets, the hotel, and the tours—and stayed home.",
          "She cancelled the trip, the tickets, the hotel, and the tours—and stayed home.",
          "She cancelled the trip; the tickets, the hotel, and the tours, and stayed home."
        ],
        "a": 1,
        "why": "The list already contains commas, so dashes on both sides are the cleanest way to set it off.",
        "wx": [
          "The original punctuation is not correct, so this should not be left as it is.",
          "",
          "This version does not set off the extra, explanatory material with dashes in the right places (a mid-sentence aside needs a dash on both sides).",
          "This version does not set off the extra, explanatory material with dashes in the right places (a mid-sentence aside needs a dash on both sides)."
        ]
      },
      {
        "q": "One fact stood out—the vote was unanimous. Here the dash",
        "o": [
          "joins two dependent clauses incorrectly",
          "sets off a brief explanatory remark, much as a colon or parentheses might",
          "must be doubled even at the end of a sentence",
          "should be a semicolon because the second part is a list"
        ],
        "a": 1,
        "why": "A dash can set off a final explanatory piece. A second dash is needed only when the aside sits in the middle of the sentence.",
        "wx": [
          "\"joins two dependent clauses incorrectly\" is not the problem, or not the right fix, in this sentence.",
          "",
          "\"must be doubled even at the end of a sentence\" is not the problem, or not the right fix, in this sentence.",
          "\"should be a semicolon because the second part is a list\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "The tools were missing—hammers, wrenches, and pliers, so the job was delayed. The best revision is",
        "o": [
          "leave the punctuation as it is",
          "The tools were missing—hammers, wrenches, and pliers—so the job was delayed.",
          "The tools were missing, hammers, wrenches, and pliers—so the job was delayed.",
          "The tools were missing; hammers, wrenches, and pliers, so the job was delayed."
        ],
        "a": 1,
        "why": "The mid-sentence list of examples needs a dash on both sides.",
        "wx": [
          "The original punctuation is not correct, so this should not be left as it is.",
          "",
          "This version does not set off the extra, explanatory material with dashes in the right places (a mid-sentence aside needs a dash on both sides).",
          "This version does not set off the extra, explanatory material with dashes in the right places (a mid-sentence aside needs a dash on both sides)."
        ]
      },
      {
        "q": "Which sentence about the winner uses dashes correctly?",
        "o": [
          "The winner—announced after midnight, thanked the crew.",
          "The winner—announced after midnight—thanked the crew.",
          "The winner, announced after midnight—thanked the crew.",
          "The winner—announced after midnight thanked the crew."
        ],
        "a": 1,
        "why": "A mid-sentence aside must be enclosed by a dash on both sides.",
        "wx": [
          "This version does not set off the extra, explanatory material with dashes in the right places (a mid-sentence aside needs a dash on both sides).",
          "",
          "This version does not set off the extra, explanatory material with dashes in the right places (a mid-sentence aside needs a dash on both sides).",
          "This version does not set off the extra, explanatory material with dashes in the right places (a mid-sentence aside needs a dash on both sides)."
        ]
      }
    ],
    "bank": [
      {
        "q": "The letter—dated 1912, and written in pencil, was hard to read. The best revision is",
        "o": [
          "leave the punctuation as it is",
          "The letter—dated 1912 and written in pencil—was hard to read.",
          "The letter, dated 1912, and written in pencil—was hard to read.",
          "The letter—dated 1912 and written in pencil, was hard to read."
        ],
        "a": 1,
        "why": "The whole aside should be inside a pair of dashes, without a stray comma taking the place of the second dash.",
        "wx": [
          "The original punctuation is not correct, so this should not be left as it is.",
          "",
          "This version does not set off the extra, explanatory material with dashes in the right places (a mid-sentence aside needs a dash on both sides).",
          "This version does not set off the extra, explanatory material with dashes in the right places (a mid-sentence aside needs a dash on both sides)."
        ]
      },
      {
        "q": "He packed one luxury—a small tin of tea—and nothing else. This punctuation is",
        "o": [
          "incorrect",
          "correct, because the aside is set off by dashes on both sides",
          "incorrect unless a colon follows \"luxury\"",
          "incorrect because \"and\" cannot follow a dash"
        ],
        "a": 1,
        "why": "The mid-sentence aside is correctly surrounded by dashes.",
        "wx": [
          "\"incorrect\" is not the right punctuation here.",
          "",
          "\"incorrect unless a colon follows \"luxury\"\" is not the problem, or not the right fix, in this sentence.",
          "\"incorrect because \"and\" cannot follow a dash\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "The storm took down three trees, an oak, a maple, and a pine, in the front yard. A clearer revision is",
        "o": [
          "leave the commas as they are",
          "The storm took down three trees—an oak, a maple, and a pine—in the front yard.",
          "The storm took down three trees; an oak, a maple, and a pine, in the front yard.",
          "The storm took down three trees: an oak, a maple, and a pine, in the front yard and leave the comma after pine."
        ],
        "a": 1,
        "why": "The list of examples already contains commas, so dashes set it off more clearly than additional commas.",
        "wx": [
          "The original punctuation is not correct, so this should not be left as it is.",
          "",
          "This version does not set off the extra, explanatory material with dashes in the right places (a mid-sentence aside needs a dash on both sides).",
          "This version does not set off the extra, explanatory material with dashes in the right places (a mid-sentence aside needs a dash on both sides)."
        ]
      },
      {
        "q": "My only request—if you can manage it, is a later start time. The error is",
        "o": [
          "a missing second dash after \"it\"",
          "a missing colon after \"request\"",
          "that dashes cannot set off a condition",
          "a required semicolon after \"it\""
        ],
        "a": 0,
        "why": "The mid-sentence aside needs a closing dash after \"it.\"",
        "wx": [
          "",
          "\"a missing colon after \"request\"\" is not the problem, or not the right fix, in this sentence.",
          "\"that dashes cannot set off a condition\" is not the problem, or not the right fix, in this sentence.",
          "\"a required semicolon after \"it\"\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "Which sentence about the code is correctly punctuated?",
        "o": [
          "The code—or what was left of it, would not compile.",
          "The code—or what was left of it—would not compile.",
          "The code, or what was left of it—would not compile.",
          "The code—or what was left of it would not compile."
        ],
        "a": 1,
        "why": "The aside \"or what was left of it\" must have a dash on both sides.",
        "wx": [
          "This version does not set off the extra, explanatory material with dashes in the right places (a mid-sentence aside needs a dash on both sides).",
          "",
          "This version does not set off the extra, explanatory material with dashes in the right places (a mid-sentence aside needs a dash on both sides).",
          "This version does not set off the extra, explanatory material with dashes in the right places (a mid-sentence aside needs a dash on both sides)."
        ]
      },
      {
        "q": "We met the owner—and her dog—at the gate. This is",
        "o": [
          "incorrect; \"and\" cannot appear inside dashes",
          "correct if the phrase is a brief aside",
          "incorrect; only parentheses are allowed",
          "incorrect unless a colon is used"
        ],
        "a": 1,
        "why": "Dashes may set off a short, non-crucial phrase, even one that begins with \"and.\"",
        "wx": [
          "\"incorrect; \"and\" cannot appear inside dashes\" is not the problem, or not the right fix, in this sentence.",
          "",
          "\"incorrect; only parentheses are allowed\" is not the problem, or not the right fix, in this sentence.",
          "\"incorrect unless a colon is used\" is not the problem, or not the right fix, in this sentence."
        ]
      }
    ]
  },
  {
    "id": "suchas",
    "part": 2,
    "source": "B",
    "title": "Punctuating \"such as\"",
    "rule": "The phrase such as introduces a series of examples to back up a point that has just been made. The correct way to punctuate it is to put a comma before such as, and then no comma before the first list item or example.",
    "trap": "Putting a comma after \"such as,\" or leaving out the comma before \"such as.\"",
    "before": "Teachers give out a variety of homework assignments, such as, worksheets, hands-on projects, and online quizzes.",
    "after": "Teachers give out a variety of homework assignments, such as worksheets, hands-on projects, and online quizzes.",
    "qs": [
      {
        "q": "Teachers give out a variety of homework assignments___ such as___ worksheets, hands-on projects, and online quizzes.",
        "o": [
          ", / , (comma on both sides)",
          " , / no comma after \"such as\"",
          "no comma / a comma after \"such as\"",
          "a colon / a comma"
        ],
        "a": 1,
        "why": "Put a comma before \"such as\" and no comma before the first example.",
        "wx": [
          "This version does not follow the \"such as\" rule: a comma before \"such as,\" and no comma or colon after it.",
          "",
          "\"no comma / a comma after \"such as\"\" is not the problem, or not the right fix, in this sentence.",
          "A colon is not the right mark in this \"such as\" phrase. Use a comma before \"such as\" and no comma or colon after it."
        ]
      },
      {
        "q": "The antique book shop also sold other paper ephemera such as, maps and newspapers. The error is",
        "o": [
          "a missing colon after \"ephemera\"",
          "a comma after \"such as\" (and a needed comma before it)",
          "that \"such as\" cannot introduce two examples",
          "a needed semicolon after \"ephemera\""
        ],
        "a": 1,
        "why": "There should be a comma before \"such as\" and no comma after it.",
        "wx": [
          "A colon is not the right mark in this \"such as\" phrase. Use a comma before \"such as\" and no comma or colon after it.",
          "",
          "\"that \"such as\" cannot introduce two examples\" is not the problem, or not the right fix, in this sentence.",
          "A semicolon is not the right mark in this \"such as\" phrase. Use a comma before \"such as\" and no comma after it."
        ]
      },
      {
        "q": "The farm grows several herbs, such as basil, thyme, and mint. This punctuation is",
        "o": [
          "incorrect; drop the comma before \"such as\"",
          "correct: comma before \"such as,\" none after it",
          "incorrect; add a comma after \"such as\"",
          "incorrect; use a colon after \"such as\""
        ],
        "a": 1,
        "why": "A comma belongs before \"such as,\" and there is no comma after it.",
        "wx": [
          "\"incorrect; drop the comma before \"such as\"\" is not the problem, or not the right fix, in this sentence.",
          "",
          "\"incorrect; add a comma after \"such as\"\" is not the problem, or not the right fix, in this sentence.",
          "A colon is not the right mark in this \"such as\" phrase. Use a comma before \"such as\" and no comma or colon after it."
        ]
      },
      {
        "q": "Cities such as Paris and Tokyo attract millions of visitors. A comma before \"such as\" is",
        "o": [
          "required in every sentence",
          "not needed here, because \"such as Paris and Tokyo\" is essential to identify which cities",
          "required after \"such as\" instead",
          "required only after \"Tokyo\""
        ],
        "a": 1,
        "why": "When \"such as...\" is essential to the meaning, many such phrases are not set off; the tested mechanical rule still forbids a comma after \"such as.\" This item focuses on the official pattern for a nonessential example series after a general noun: wait, this sentence does NOT have a comma before such as because \"cities such as Paris\" is restrictive. Good - I should not contradict the main rule. The official examples all have a comma before such as when it introduces examples after a general point. \"Cities such as Paris\" is a different pattern (restrictive). This could confuse. Let me keep it only if the why is careful: the official punctuation lesson is specifically comma before such as, no comma after, for the example-series pattern. This question is about not adding a comma after such as, and not forcing a comma in a restrictive phrase. OK if why is clear.",
        "wx": [
          "\"required in every sentence\" is not the problem, or not the right fix, in this sentence.",
          "",
          "\"required after \"such as\" instead\" is not the problem, or not the right fix, in this sentence.",
          "\"required only after \"Tokyo\"\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "The kit includes basic tools, such as a hammer, a wrench, and pliers. The comma after \"tools\" is",
        "o": [
          "wrong",
          "correct, because it comes before \"such as\"",
          "required after \"such as\" as well",
          "a substitute for a colon only"
        ],
        "a": 1,
        "why": "A comma is placed before \"such as\" when it introduces a series of examples.",
        "wx": [
          "\"wrong\" is not the right punctuation here.",
          "",
          "\"required after \"such as\" as well\" is not the problem, or not the right fix, in this sentence.",
          "A colon is not the right mark in this \"such as\" phrase. Use a comma before \"such as\" and no comma or colon after it."
        ]
      },
      {
        "q": "She invited several classmates such as, Nia and Owen. The best revision is",
        "o": [
          "She invited several classmates such as, Nia and Owen.",
          "She invited several classmates, such as Nia and Owen.",
          "She invited several classmates, such as, Nia and Owen.",
          "She invited several classmates: such as, Nia and Owen."
        ],
        "a": 1,
        "why": "Use a comma before \"such as\" and no comma after it.",
        "wx": [
          "This version does not follow the \"such as\" rule: a comma before \"such as,\" and no comma or colon after it.",
          "",
          "This version does not follow the \"such as\" rule: a comma before \"such as,\" and no comma or colon after it.",
          "This version does not follow the \"such as\" rule: a comma before \"such as,\" and no comma or colon after it."
        ]
      },
      {
        "q": "Which sentence is punctuated according to the rule?",
        "o": [
          "The menu offers many sides, such as, rice, salad, and bread.",
          "The menu offers many sides, such as rice, salad, and bread.",
          "The menu offers many sides such as, rice, salad, and bread.",
          "The menu offers many sides: such as, rice, salad, and bread."
        ],
        "a": 1,
        "why": "Comma before \"such as,\" no comma after it.",
        "wx": [
          "This version does not follow the \"such as\" rule: a comma before \"such as,\" and no comma or colon after it.",
          "",
          "This version does not follow the \"such as\" rule: a comma before \"such as,\" and no comma or colon after it.",
          "This version does not follow the \"such as\" rule: a comma before \"such as,\" and no comma or colon after it."
        ]
      },
      {
        "q": "The course covers early composers, such as Bach and Mozart. A comma after \"such as\" would be",
        "o": [
          "required",
          "incorrect",
          "required only before \"Mozart\"",
          "interchangeable with a semicolon"
        ],
        "a": 1,
        "why": "There is no comma after \"such as\" before the first example.",
        "wx": [
          "\"required\" is not the right punctuation here.",
          "",
          "\"required only before \"Mozart\"\" is not the problem, or not the right fix, in this sentence.",
          "A semicolon is not the right mark in this \"such as\" phrase. Use a comma before \"such as\" and no comma after it."
        ]
      },
      {
        "q": "Wildlife such as deer and foxes use the corridor. The phrase should",
        "o": [
          "have a comma after \"such as\"",
          "have no comma after \"such as\"",
          "end with a semicolon",
          "be rewritten with a colon after \"as\""
        ],
        "a": 1,
        "why": "Never put a comma after \"such as\" before the first example.",
        "wx": [
          "\"have a comma after \"such as\"\" is not the problem, or not the right fix, in this sentence.",
          "",
          "A semicolon is not the right mark in this \"such as\" phrase. Use a comma before \"such as\" and no comma after it.",
          "A colon is not the right mark in this \"such as\" phrase. Use a comma before \"such as\" and no comma or colon after it."
        ]
      },
      {
        "q": "He packed warm layers, such as a fleece and a shell. This is",
        "o": [
          "missing a comma after \"such as\"",
          "correctly punctuated",
          "missing a colon after \"layers\"",
          "incorrect because two examples cannot follow \"such as\""
        ],
        "a": 1,
        "why": "The comma comes before \"such as,\" not after it.",
        "wx": [
          "\"missing a comma after \"such as\"\" is not the problem, or not the right fix, in this sentence.",
          "",
          "A colon is not the right mark in this \"such as\" phrase. Use a comma before \"such as\" and no comma or colon after it.",
          "\"incorrect because two examples cannot follow \"such as\"\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "Choose the correctly punctuated sentence.",
        "o": [
          "The archive holds paper records such as, letters and diaries.",
          "The archive holds paper records, such as letters and diaries.",
          "The archive holds paper records, such as, letters and diaries.",
          "The archive holds paper records: such as, letters and diaries."
        ],
        "a": 1,
        "why": "Comma before \"such as,\" none after it.",
        "wx": [
          "This version does not follow the \"such as\" rule: a comma before \"such as,\" and no comma or colon after it.",
          "",
          "This version does not follow the \"such as\" rule: a comma before \"such as,\" and no comma or colon after it.",
          "This version does not follow the \"such as\" rule: a comma before \"such as,\" and no comma or colon after it."
        ]
      },
      {
        "q": "Many stone fruits, such as peaches, plums, and apricots, bruise easily. The punctuation around the examples is",
        "o": [
          "wrong because of the comma before \"such as\"",
          "fine: comma before \"such as,\" no comma after it, and commas between the examples",
          "wrong because there is no comma after \"such as\"",
          "wrong unless semicolons separate the fruits"
        ],
        "a": 1,
        "why": "This follows the rule: a comma before \"such as\" and no comma after it.",
        "wx": [
          "\"wrong because of the comma before \"such as\"\" is not the problem, or not the right fix, in this sentence.",
          "",
          "\"wrong because there is no comma after \"such as\"\" is not the problem, or not the right fix, in this sentence.",
          "This version does not follow the \"such as\" rule: a comma before \"such as,\" and no comma or colon after it."
        ]
      }
    ],
    "bank": [
      {
        "q": "The drawer held odds and ends, such as, buttons and keys. The error is",
        "o": [
          "the comma before \"such as\"",
          "the comma after \"such as\"",
          "the missing colon after \"ends\"",
          "that two examples are not enough"
        ],
        "a": 1,
        "why": "Do not put a comma after \"such as.\"",
        "wx": [
          "\"the comma before \"such as\"\" is not the right punctuation here.",
          "",
          "\"the missing colon after \"ends\"\" is not the right punctuation here.",
          "This version does not follow the \"such as\" rule: a comma before \"such as,\" and no comma or colon after it."
        ]
      },
      {
        "q": "Which sentence follows the punctuation rule?",
        "o": [
          "She listed several grains such as, wheat and rye.",
          "She listed several grains, such as wheat and rye.",
          "She listed several grains, such as, wheat and rye.",
          "She listed several grains: such as, wheat and rye."
        ],
        "a": 1,
        "why": "Comma before \"such as,\" none after it.",
        "wx": [
          "This version does not follow the \"such as\" rule: a comma before \"such as,\" and no comma or colon after it.",
          "",
          "This version does not follow the \"such as\" rule: a comma before \"such as,\" and no comma or colon after it.",
          "This version does not follow the \"such as\" rule: a comma before \"such as,\" and no comma or colon after it."
        ]
      },
      {
        "q": "The park bans motorized vehicles, such as scooters and mini-bikes. This punctuation is",
        "o": [
          "incorrect",
          "correct",
          "missing a comma after \"such as\"",
          "missing a semicolon after \"vehicles\""
        ],
        "a": 1,
        "why": "A comma precedes \"such as,\" and there is no comma after it.",
        "wx": [
          "\"incorrect\" is not the right punctuation here.",
          "",
          "\"missing a comma after \"such as\"\" is not the problem, or not the right fix, in this sentence.",
          "A semicolon is not the right mark in this \"such as\" phrase. Use a comma before \"such as\" and no comma after it."
        ]
      },
      {
        "q": "Sources such as, diaries and letters can be hard to date. The best revision is",
        "o": [
          "Sources such as, diaries and letters can be hard to date.",
          "Sources such as diaries and letters can be hard to date.",
          "Sources, such as, diaries and letters can be hard to date.",
          "Sources: such as, diaries and letters can be hard to date."
        ],
        "a": 1,
        "why": "There should be no comma after \"such as.\"",
        "wx": [
          "This version does not follow the \"such as\" rule: a comma before \"such as,\" and no comma or colon after it.",
          "",
          "This version does not follow the \"such as\" rule: a comma before \"such as,\" and no comma or colon after it.",
          "This version does not follow the \"such as\" rule: a comma before \"such as,\" and no comma or colon after it."
        ]
      },
      {
        "q": "The shop sells tropical fruit, such as mangoes and papayas. A comma after \"such as\" would be",
        "o": [
          "required",
          "incorrect",
          "required only before \"papayas\"",
          "required because two examples appear"
        ],
        "a": 1,
        "why": "The rule is: no comma after \"such as.\"",
        "wx": [
          "\"required\" is not the right punctuation here.",
          "",
          "\"required only before \"papayas\"\" is not the problem, or not the right fix, in this sentence.",
          "\"required because two examples appear\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "Choose the correctly punctuated sentence about assignments.",
        "o": [
          "He prefers short assignments such as, quizzes and exit tickets.",
          "He prefers short assignments, such as quizzes and exit tickets.",
          "He prefers short assignments, such as, quizzes and exit tickets.",
          "He prefers short assignments: such as, quizzes and exit tickets."
        ],
        "a": 1,
        "why": "Comma before \"such as,\" none after it.",
        "wx": [
          "This version does not follow the \"such as\" rule: a comma before \"such as,\" and no comma or colon after it.",
          "",
          "This version does not follow the \"such as\" rule: a comma before \"such as,\" and no comma or colon after it.",
          "This version does not follow the \"such as\" rule: a comma before \"such as,\" and no comma or colon after it."
        ]
      }
    ]
  },
  {
    "id": "lists",
    "part": 2,
    "source": "B",
    "title": "Formatting lists",
    "rule": "A list is a series of people, ideas, objects, actions, or conditions that follow one another, play the same role in the sentence, and are typically separated by commas. List items should be separated by commas, with a comma coming before the \"and\" or \"or\" that precedes the last item: dogs, cats, gerbils, and fish. If one of the list items has a comma within it, then all the list items should be separated by semicolons instead.",
    "trap": "Leaving out the comma before the final \"and,\" using a semicolon in a simple list that has no internal commas, or using only commas when an item already contains a comma.",
    "before": "The market stall sold ripe apples, cherries; and sometimes even apricots.",
    "after": "The market stall sold ripe apples, cherries, and sometimes even apricots.",
    "qs": [
      {
        "q": "The market stall sold ripe apples, cherries; and sometimes even apricots. The best revision is",
        "o": [
          "leave the semicolon before \"and\"",
          "The market stall sold ripe apples, cherries, and sometimes even apricots.",
          "The market stall sold ripe apples; cherries; and sometimes even apricots.",
          "The market stall sold ripe apples, cherries and, sometimes even apricots."
        ],
        "a": 1,
        "why": "This is a simple list with no commas inside the items, so the items are separated by commas, including a comma before \"and.\"",
        "wx": [
          "The original punctuation is not correct, so this should not be left as it is.",
          "",
          "Semicolons are for list items that already contain commas. In a simple list, use commas, including a comma before the final \"and.\"",
          "This version is not punctuated correctly."
        ]
      },
      {
        "q": "The class focused on programming languages, such as Python; algorithms; and documentation. The best revision is",
        "o": [
          "leave the semicolons",
          "The class focused on programming languages, such as Python, algorithms, and documentation.",
          "The class focused on programming languages; such as Python, algorithms, and documentation.",
          "The class focused on programming languages, such as Python, algorithms; and documentation."
        ],
        "a": 1,
        "why": "None of the list items contains an internal comma, so ordinary commas, not semicolons, should separate the three topics.",
        "wx": [
          "The original punctuation is not correct, so this should not be left as it is.",
          "",
          "Semicolons are for list items that already contain commas. In a simple list, use commas, including a comma before the final \"and.\"",
          "Semicolons are for list items that already contain commas. In a simple list, use commas, including a comma before the final \"and.\""
        ]
      },
      {
        "q": "Which list of pets is punctuated correctly?",
        "o": [
          "dogs, cats, gerbils and fish",
          "dogs, cats, gerbils, and fish",
          "dogs; cats; gerbils, and fish",
          "dogs, cats gerbils, and fish"
        ],
        "a": 1,
        "why": "Items are separated by commas, with a comma before the \"and\" that precedes the last item.",
        "wx": [
          "\"dogs, cats, gerbils and fish\" is not the right punctuation here.",
          "",
          "\"dogs; cats; gerbils, and fish\" is not the right punctuation here.",
          "\"dogs, cats gerbils, and fish\" is not the right punctuation here."
        ]
      },
      {
        "q": "The trip included Paris, France, Rome, Italy, and Madrid, Spain. The best revision is",
        "o": [
          "leave the commas as they are",
          "The trip included Paris, France; Rome, Italy; and Madrid, Spain.",
          "The trip included Paris, France, Rome, Italy and Madrid, Spain.",
          "The trip included Paris; France; Rome; Italy; and Madrid; Spain."
        ],
        "a": 1,
        "why": "Each city-country pair already contains a comma, so the items should be separated by semicolons, including a semicolon before \"and.\"",
        "wx": [
          "The original punctuation is not correct, so this should not be left as it is.",
          "",
          "This version is not punctuated correctly.",
          "Semicolons are for list items that already contain commas. In a simple list, use commas, including a comma before the final \"and.\""
        ]
      },
      {
        "q": "She packed a red, wool sweater, a map, and a flashlight. Because the first item contains a comma, a careful revision is",
        "o": [
          "leave the commas as they are",
          "She packed a red, wool sweater; a map; and a flashlight.",
          "She packed a red wool sweater a map and a flashlight.",
          "She packed a red, wool, sweater, a map and a flashlight."
        ],
        "a": 1,
        "why": "The first item contains a comma, so all list items should be separated by semicolons.",
        "wx": [
          "The original punctuation is not correct, so this should not be left as it is.",
          "",
          "This version is not punctuated correctly.",
          "This version is not punctuated correctly."
        ]
      },
      {
        "q": "Which sentence about travel options is correctly punctuated?",
        "o": [
          "We can walk, bike or, take the train.",
          "We can walk, bike, or take the train.",
          "We can walk; bike; or take the train.",
          "We can walk, bike or take, the train."
        ],
        "a": 1,
        "why": "A simple list takes commas, including a comma before \"or.\"",
        "wx": [
          "This version is not punctuated correctly.",
          "",
          "Semicolons are for list items that already contain commas. In a simple list, use commas, including a comma before the final \"and.\"",
          "This version is not punctuated correctly."
        ]
      },
      {
        "q": "The panel heard from Dr. Shah, a chemist, Ms. Ortiz, a journalist, and Mr. Cho, a teacher. The best punctuation is",
        "o": [
          "commas only, as written",
          "Dr. Shah, a chemist; Ms. Ortiz, a journalist; and Mr. Cho, a teacher",
          "Dr. Shah; a chemist; Ms. Ortiz; a journalist; and Mr. Cho; a teacher",
          "Dr. Shah, a chemist, Ms. Ortiz, a journalist and Mr. Cho, a teacher"
        ],
        "a": 1,
        "why": "Each item contains a comma, so semicolons should separate the items.",
        "wx": [
          "\"commas only, as written\" is not the right punctuation here.",
          "",
          "Semicolons are for list items that already contain commas. In a simple list, use commas, including a comma before the final \"and.\"",
          "This version is not punctuated correctly."
        ]
      },
      {
        "q": "The recipe lists flour, sugar, butter and, eggs. The error is",
        "o": [
          "a missing semicolon",
          "the comma after \"and\" and the missing comma before \"and\"",
          "that four items cannot form a list",
          "a missing colon after \"lists\""
        ],
        "a": 1,
        "why": "The comma belongs before \"and,\" not after it.",
        "wx": [
          "\"a missing semicolon\" is not the problem, or not the right fix, in this sentence.",
          "",
          "\"that four items cannot form a list\" is not the problem, or not the right fix, in this sentence.",
          "\"a missing colon after \"lists\"\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "For dinner we had soup, salad, and bread. This punctuation is",
        "o": [
          "missing a semicolon",
          "correct",
          "missing a comma after \"and\"",
          "incorrect because the last comma should be a semicolon"
        ],
        "a": 1,
        "why": "A simple list is correctly separated by commas, with a comma before \"and.\"",
        "wx": [
          "\"missing a semicolon\" is not the problem, or not the right fix, in this sentence.",
          "",
          "\"missing a comma after \"and\"\" is not the problem, or not the right fix, in this sentence.",
          "\"incorrect because the last comma should be a semicolon\" is not the problem, or not the right fix, in this sentence."
        ]
      },
      {
        "q": "The box held nails, which were rusty, screws, which were new, and a hammer. The best revision is",
        "o": [
          "leave the commas as they are",
          "The box held nails, which were rusty; screws, which were new; and a hammer.",
          "The box held nails which were rusty screws which were new and a hammer.",
          "The box held nails, which were rusty, screws, which were new and a hammer."
        ],
        "a": 1,
        "why": "Two items contain commas, so semicolons should separate all of the list items.",
        "wx": [
          "The original punctuation is not correct, so this should not be left as it is.",
          "",
          "This version is not punctuated correctly.",
          "This version is not punctuated correctly."
        ]
      },
      {
        "q": "Which sentence about school supplies is correctly punctuated?",
        "o": [
          "Please bring pencils, paper and, erasers.",
          "Please bring pencils, paper, and erasers.",
          "Please bring pencils; paper; and erasers.",
          "Please bring pencils, paper and erasers,"
        ],
        "a": 1,
        "why": "Use commas between simple list items, including a comma before \"and.\"",
        "wx": [
          "This version is not punctuated correctly.",
          "",
          "Semicolons are for list items that already contain commas. In a simple list, use commas, including a comma before the final \"and.\"",
          "This version is not punctuated correctly."
        ]
      },
      {
        "q": "The tour visits Austin, Texas and Memphis, Tennessee. The best revision is",
        "o": [
          "The tour visits Austin, Texas and Memphis, Tennessee.",
          "The tour visits Austin, Texas; and Memphis, Tennessee.",
          "The tour visits Austin Texas, and Memphis Tennessee.",
          "The tour visits Austin; Texas; and Memphis; Tennessee."
        ],
        "a": 1,
        "why": "Each city-state pair contains a comma, so a semicolon should separate the two items, including before \"and.\"",
        "wx": [
          "This version is not punctuated correctly.",
          "",
          "This version is not punctuated correctly.",
          "Semicolons are for list items that already contain commas. In a simple list, use commas, including a comma before the final \"and.\""
        ]
      }
    ],
    "bank": [
      {
        "q": "He wants teal, navy or gray paint. The best revision is",
        "o": [
          "He wants teal, navy or gray paint.",
          "He wants teal, navy, or gray paint.",
          "He wants teal; navy; or gray paint.",
          "He wants teal, navy or, gray paint."
        ],
        "a": 1,
        "why": "A simple list takes a comma before the final \"or.\"",
        "wx": [
          "This version is not punctuated correctly.",
          "",
          "Semicolons are for list items that already contain commas. In a simple list, use commas, including a comma before the final \"and.\"",
          "This version is not punctuated correctly."
        ]
      },
      {
        "q": "The exhibit featured a tall, carved totem, a canoe, and a mask. Because the first item contains a comma, the list should be written as",
        "o": [
          "leave it as is",
          "The exhibit featured a tall, carved totem; a canoe; and a mask.",
          "The exhibit featured a tall carved totem a canoe and a mask.",
          "The exhibit featured a tall, carved, totem, a canoe and a mask."
        ],
        "a": 1,
        "why": "An internal comma in one item means all items should be separated by semicolons.",
        "wx": [
          "The original punctuation is not correct, so this should not be left as it is.",
          "",
          "This version is not punctuated correctly.",
          "This version is not punctuated correctly."
        ]
      },
      {
        "q": "Add a comma where it is needed in \"red, yellow and blue.\" The series should read",
        "o": [
          "red yellow, and blue",
          "red, yellow, and blue",
          "red; yellow; and blue",
          "red, yellow and, blue"
        ],
        "a": 1,
        "why": "Place a comma before the final \"and.\"",
        "wx": [
          "\"red yellow, and blue\" is not the right punctuation here.",
          "",
          "\"red; yellow; and blue\" is not the right punctuation here.",
          "\"red, yellow and, blue\" is not the right punctuation here."
        ]
      },
      {
        "q": "The guests included Ana Diaz, MD, Ben Cole, PhD, and Lin Park, Esq. The best punctuation uses",
        "o": [
          "only commas throughout",
          "semicolons between the three people, because each name already contains a comma",
          "colons between the titles",
          "no punctuation before \"and\""
        ],
        "a": 1,
        "why": "Each item has an internal comma, so semicolons separate the items.",
        "wx": [
          "\"only commas throughout\" is not the right punctuation here.",
          "",
          "\"colons between the titles\" is not the right punctuation here.",
          "\"no punctuation before \"and\"\" is not the right punctuation here."
        ]
      },
      {
        "q": "Which sentence about breakfast is correctly punctuated?",
        "o": [
          "She ordered tea, toast, and jam.",
          "She ordered tea, toast and, jam.",
          "She ordered tea; toast; and jam.",
          "She ordered tea toast, and jam."
        ],
        "a": 0,
        "why": "A simple list is correctly written with commas, including a comma before \"and.\"",
        "wx": [
          "",
          "This version is not punctuated correctly.",
          "Semicolons are for list items that already contain commas. In a simple list, use commas, including a comma before the final \"and.\"",
          "This version is not punctuated correctly."
        ]
      },
      {
        "q": "The folder contains a signed, dated contract, a receipt, and a note. A clearer version is",
        "o": [
          "leave it as is",
          "The folder contains a signed, dated contract; a receipt; and a note.",
          "The folder contains a signed dated contract a receipt and a note.",
          "The folder contains a signed, dated, contract, a receipt and a note."
        ],
        "a": 1,
        "why": "The first item contains a comma, so semicolons should separate the items.",
        "wx": [
          "The original punctuation is not correct, so this should not be left as it is.",
          "",
          "This version is not punctuated correctly.",
          "This version is not punctuated correctly."
        ]
      }
    ]
  },
  {
    "id": "clauses",
    "part": 2,
    "source": "B",
    "title": "Independent vs dependent clauses",
    "rule": "Sentences are made up of clauses. An independent clause can function as a complete sentence because it has a subject-verb pair and does not start with a word or phrase that makes the clause dependent, such as when or because. A dependent clause must be attached to an independent clause to be part of a complete sentence. The SAT tests this distinction when you fix fragments, split run-ons, or use a dependent clause as a subject.",
    "trap": "Treating a clause that starts with \"because,\" \"when,\" \"if,\" or \"although\" as if it could stand alone, or failing to attach it to a complete sentence.",
    "before": "When the lights dimmed. The audience grew quiet.",
    "after": "When the lights dimmed, the audience grew quiet.",
    "qs": [
      {
        "q": "Which of the following is an independent clause?",
        "o": [
          "When the lights dimmed",
          "Because the train was late",
          "The audience grew quiet",
          "If the doors are locked"
        ],
        "a": 2,
        "why": "Only \"The audience grew quiet\" has a subject-verb pair and no subordinating word, so it can stand as a sentence.",
        "wx": [
          "\"When the lights dimmed\" is a dependent clause — it starts with a subordinating word — so it cannot stand alone as a complete sentence.",
          "\"Because the train was late\" is a dependent clause — it starts with a subordinating word — so it cannot stand alone as a complete sentence.",
          "",
          "\"If the doors are locked\" is a dependent clause — it starts with a subordinating word — so it cannot stand alone as a complete sentence."
        ]
      },
      {
        "q": "Which of the following is a dependent clause?",
        "o": [
          "The lab closed at six.",
          "Because the lab closed at six",
          "The students moved their work.",
          "Owen set the table."
        ],
        "a": 1,
        "why": "\"Because\" makes the clause dependent; it cannot stand alone as a sentence.",
        "wx": [
          "\"The lab closed at six.\" is an independent clause (a complete thought), not a dependent one.",
          "",
          "\"The students moved their work.\" is an independent clause (a complete thought), not a dependent one.",
          "\"Owen set the table.\" is an independent clause (a complete thought), not a dependent one."
        ]
      },
      {
        "q": "\"When the lights dimmed.\" This is",
        "o": [
          "a complete sentence",
          "a dependent clause, which must be attached to an independent clause",
          "two independent clauses",
          "a run-on"
        ],
        "a": 1,
        "why": "A clause starting with \"when\" is dependent and must be attached to a complete sentence.",
        "wx": [
          "\"a complete sentence\" is an independent clause (a complete thought), not a dependent one.",
          "",
          "\"two independent clauses\" is not the right identification or joining of the clause.",
          "\"a run-on\" is an independent clause (a complete thought), not a dependent one."
        ]
      },
      {
        "q": "Which sentence about the map is complete and correctly punctuated?",
        "o": [
          "Although the map was outdated.",
          "Although the map was outdated, we found the trail.",
          "Although the map was outdated; we found the trail.",
          "Although the map was outdated the trail."
        ],
        "a": 1,
        "why": "The dependent \"Although...\" clause is correctly attached to the independent clause with a comma, not a semicolon.",
        "wx": [
          "\"Although the map was outdated.\" is a dependent clause — it starts with a subordinating word — so it cannot stand alone as a complete sentence.",
          "",
          "\"Although the map was outdated; we found the trail.\" is a dependent clause — it starts with a subordinating word — so it cannot stand alone as a complete sentence.",
          "\"Although the map was outdated the trail.\" is a dependent clause — it starts with a subordinating word — so it cannot stand alone as a complete sentence."
        ]
      },
      {
        "q": "A clause that begins with \"if,\" \"because,\" or \"although\" is",
        "o": [
          "always independent",
          "dependent and must be attached to an independent clause",
          "a complete sentence if it has a verb",
          "correctly ended with a period on its own"
        ],
        "a": 1,
        "why": "Those opening words make the clause dependent.",
        "wx": [
          "\"always independent\" is not the right identification or joining of the clause.",
          "",
          "\"a complete sentence if it has a verb\" is an independent clause (a complete thought), not a dependent one.",
          "\"correctly ended with a period on its own\" is not the right identification or joining of the clause."
        ]
      },
      {
        "q": "Which pair is two independent clauses?",
        "o": [
          "The rain stopped / we walked home",
          "When the rain stopped / we walked home",
          "Because the rain stopped / we walked home",
          "If the rain stopped / walking home"
        ],
        "a": 0,
        "why": "Both \"The rain stopped\" and \"we walked home\" can stand alone.",
        "wx": [
          "",
          "\"When the rain stopped / we walked home\" is a dependent clause — it starts with a subordinating word — so it cannot stand alone as a complete sentence.",
          "\"Because the rain stopped / we walked home\" is a dependent clause — it starts with a subordinating word — so it cannot stand alone as a complete sentence.",
          "\"If the rain stopped / walking home\" is a dependent clause — it starts with a subordinating word — so it cannot stand alone as a complete sentence."
        ]
      },
      {
        "q": "\"The students moved their work.\" This is",
        "o": [
          "a dependent clause",
          "an independent clause",
          "a fragment missing a verb",
          "a subordinating phrase"
        ],
        "a": 1,
        "why": "It has a subject and verb and no subordinating word, so it is independent.",
        "wx": [
          "\"a dependent clause\" is an independent clause (a complete thought), not a dependent one.",
          "",
          "\"a fragment missing a verb\" is an independent clause (a complete thought), not a dependent one.",
          "\"a subordinating phrase\" is an independent clause (a complete thought), not a dependent one."
        ]
      },
      {
        "q": "Choose the sentence that correctly joins a dependent clause to an independent one.",
        "o": [
          "If the doors are locked. we will wait outside.",
          "If the doors are locked, we will wait outside.",
          "If the doors are locked; we will wait outside.",
          "If the doors are locked we; will wait outside."
        ],
        "a": 1,
        "why": "A dependent opener is attached to a complete main clause with a comma, not a period or a semicolon.",
        "wx": [
          "\"If the doors are locked. we will wait outside.\" is a dependent clause — it starts with a subordinating word — so it cannot stand alone as a complete sentence.",
          "",
          "\"If the doors are locked; we will wait outside.\" is a dependent clause — it starts with a subordinating word — so it cannot stand alone as a complete sentence.",
          "\"If the doors are locked we; will wait outside.\" is a dependent clause — it starts with a subordinating word — so it cannot stand alone as a complete sentence."
        ]
      },
      {
        "q": "The word \"because\" at the start of a clause generally",
        "o": [
          "makes the clause independent",
          "makes the clause dependent",
          "must be followed by a semicolon",
          "turns the clause into a list"
        ],
        "a": 1,
        "why": "\"Because\" is a word that makes a clause dependent.",
        "wx": [
          "\"makes the clause independent\" is not the right identification or joining of the clause.",
          "",
          "\"must be followed by a semicolon\" is not the right identification or joining of the clause.",
          "\"turns the clause into a list\" is not the right identification or joining of the clause."
        ]
      },
      {
        "q": "Which is a fragment?",
        "o": [
          "The oven beeped.",
          "The bread was done.",
          "While the bread baked.",
          "Owen set the table."
        ],
        "a": 2,
        "why": "\"While the bread baked\" is a dependent clause standing alone, so it is a fragment.",
        "wx": [
          "\"The oven beeped.\" is an independent clause (a complete thought), not a dependent one.",
          "\"The bread was done.\" is an independent clause (a complete thought), not a dependent one.",
          "",
          "\"Owen set the table.\" is an independent clause (a complete thought), not a dependent one."
        ]
      },
      {
        "q": "An independent clause must have",
        "o": [
          "a colon and a list",
          "a subject-verb pair and no subordinating opener that makes it dependent",
          "a semicolon",
          "a relative pronoun"
        ],
        "a": 1,
        "why": "That is the definition of an independent clause in this lesson.",
        "wx": [
          "\"a colon and a list\" is an independent clause (a complete thought), not a dependent one.",
          "",
          "\"a semicolon\" is an independent clause (a complete thought), not a dependent one.",
          "\"a relative pronoun\" is an independent clause (a complete thought), not a dependent one."
        ]
      },
      {
        "q": "Which sentence about the curtain is complete and correctly punctuated?",
        "o": [
          "After the curtain rose.",
          "After the curtain rose, the orchestra began the overture.",
          "After the curtain rose; the orchestra began the overture.",
          "After the curtain rose the overture."
        ],
        "a": 1,
        "why": "The dependent \"After...\" clause is correctly attached to an independent clause.",
        "wx": [
          "\"After the curtain rose.\" is a dependent clause — it starts with a subordinating word — so it cannot stand alone as a complete sentence.",
          "",
          "\"After the curtain rose; the orchestra began the overture.\" is a dependent clause — it starts with a subordinating word — so it cannot stand alone as a complete sentence.",
          "\"After the curtain rose the overture.\" is a dependent clause — it starts with a subordinating word — so it cannot stand alone as a complete sentence."
        ]
      }
    ],
    "bank": [
      {
        "q": "Which is dependent?",
        "o": [
          "The storm passed at midnight.",
          "After the storm passed",
          "The roads were clear.",
          "Dawn arrived."
        ],
        "a": 1,
        "why": "\"After\" makes the clause dependent.",
        "wx": [
          "\"The storm passed at midnight.\" is an independent clause (a complete thought), not a dependent one.",
          "",
          "\"The roads were clear.\" is an independent clause (a complete thought), not a dependent one.",
          "\"Dawn arrived.\" is an independent clause (a complete thought), not a dependent one."
        ]
      },
      {
        "q": "Which is independent?",
        "o": [
          "If the sample is heated",
          "When the color changes",
          "The color changes",
          "Because the color changes"
        ],
        "a": 2,
        "why": "Only \"The color changes\" can stand as a sentence.",
        "wx": [
          "\"If the sample is heated\" is a dependent clause — it starts with a subordinating word — so it cannot stand alone as a complete sentence.",
          "\"When the color changes\" is a dependent clause — it starts with a subordinating word — so it cannot stand alone as a complete sentence.",
          "",
          "\"Because the color changes\" is a dependent clause — it starts with a subordinating word — so it cannot stand alone as a complete sentence."
        ]
      },
      {
        "q": "\"Because the train was late.\" This should be",
        "o": [
          "left as a sentence",
          "attached to an independent clause, such as \"Because the train was late, we missed the opening.\"",
          "ended with a semicolon only",
          "turned into a list"
        ],
        "a": 1,
        "why": "A \"because\" clause cannot stand alone.",
        "wx": [
          "\"left as a sentence\" is not the right identification or joining of the clause.",
          "",
          "\"ended with a semicolon only\" is not the right identification or joining of the clause.",
          "\"turned into a list\" is not the right identification or joining of the clause."
        ]
      },
      {
        "q": "Choose the correctly punctuated sentence about the door.",
        "o": [
          "When I arrived. The door was open.",
          "When I arrived, the door was open.",
          "When I arrived; the door was open.",
          "When I arrived the door, was open."
        ],
        "a": 1,
        "why": "A dependent opener is joined to a main clause with a comma.",
        "wx": [
          "\"When I arrived. The door was open.\" is a dependent clause — it starts with a subordinating word — so it cannot stand alone as a complete sentence.",
          "",
          "\"When I arrived; the door was open.\" is a dependent clause — it starts with a subordinating word — so it cannot stand alone as a complete sentence.",
          "\"When I arrived the door, was open.\" is a dependent clause — it starts with a subordinating word — so it cannot stand alone as a complete sentence."
        ]
      },
      {
        "q": "Two independent clauses may be joined by",
        "o": [
          "a comma alone",
          "a semicolon, or a comma plus a conjunction, or made into two sentences",
          "a subordinating word alone with no main clause",
          "no punctuation at all"
        ],
        "a": 1,
        "why": "Independent clauses need a semicolon, a comma plus a conjunction, or a period, not a comma alone.",
        "wx": [
          "\"a comma alone\" is an independent clause (a complete thought), not a dependent one.",
          "",
          "\"a subordinating word alone with no main clause\" is an independent clause (a complete thought), not a dependent one.",
          "\"no punctuation at all\" is not the right identification or joining of the clause."
        ]
      },
      {
        "q": "Which group of words is a complete sentence?",
        "o": [
          "If the results hold.",
          "The results hold.",
          "Because the results hold.",
          "When the results hold."
        ],
        "a": 1,
        "why": "\"The results hold\" is an independent clause.",
        "wx": [
          "\"If the results hold.\" is a dependent clause — it starts with a subordinating word — so it cannot stand alone as a complete sentence.",
          "",
          "\"Because the results hold.\" is a dependent clause — it starts with a subordinating word — so it cannot stand alone as a complete sentence.",
          "\"When the results hold.\" is a dependent clause — it starts with a subordinating word — so it cannot stand alone as a complete sentence."
        ]
      }
    ]
  },
  {
    "id": "fragment",
    "part": 2,
    "source": "B",
    "title": "Sentence fragments",
    "rule": "A sentence fragment is a sentence made of anything less than an independent clause. To fix it, either connect the fragment to an independent clause or add the missing subject or verb.",
    "trap": "Leaving a phrase or a dependent clause to stand as if it were a complete sentence.",
    "before": "To boost the number of women in STEM fields, including electrical, chemical, and industrial engineering.",
    "after": "To boost the number of women in STEM fields, including electrical, chemical, and industrial engineering, senior female executives also act as mentors to young women.",
    "qs": [
      {
        "q": "To boost the number of women in STEM fields, including electrical, chemical, and industrial engineering. This is a fragment because",
        "o": [
          "it is too long",
          "it has no independent clause and must be attached to a complete sentence or given a subject and verb",
          "it uses a list",
          "it starts with \"To\""
        ],
        "a": 1,
        "why": "The group of words is less than an independent clause and should be attached to a complete main clause.",
        "wx": [
          "\"it is too long\" is not what makes this a fragment. A fragment is anything less than an independent clause, and it must be attached to a complete sentence or given a subject and a verb.",
          "",
          "\"it uses a list\" is not what makes this a fragment. A fragment is anything less than an independent clause, and it must be attached to a complete sentence or given a subject and a verb.",
          "\"it starts with \"To\"\" is not what makes this a fragment. A fragment is anything less than an independent clause, and it must be attached to a complete sentence or given a subject and a verb."
        ]
      },
      {
        "q": "Which revision completes the STEM sentence?",
        "o": [
          "leave it as a sentence",
          "To boost the number of women in STEM fields, including electrical, chemical, and industrial engineering, senior female executives also act as mentors to young women.",
          "To boost the number of women in STEM fields; including electrical, chemical, and industrial engineering.",
          "To boost the number of women in STEM fields, including electrical, chemical, and industrial engineering,."
        ],
        "a": 1,
        "why": "The fragment is connected to an independent clause about senior executives acting as mentors.",
        "wx": [
          "This is still a fragment: it is less than an independent clause, so it cannot stand alone as a sentence.",
          "",
          "A semicolon can only join two complete sentences. This version still treats a fragment as if it were a complete thought.",
          "This version is still a fragment, or it punctuates a fragment as if it were a complete sentence."
        ]
      },
      {
        "q": "From diving hard for every shot to deftly throwing the ball to the most open defender. A correct repair is to",
        "o": [
          "add a period in the middle",
          "attach the phrase to an independent clause, such as \"...the goalie was saving her team.\"",
          "change \"From\" to a semicolon",
          "add a colon after \"From\""
        ],
        "a": 1,
        "why": "The long \"From... to...\" phrase is not an independent clause and must be attached to one.",
        "wx": [
          "\"add a period in the middle\" is not what makes this a fragment. A fragment is anything less than an independent clause, and it must be attached to a complete sentence or given a subject and a verb.",
          "",
          "\"change \"From\" to a semicolon\" is not what makes this a fragment. A fragment is anything less than an independent clause, and it must be attached to a complete sentence or given a subject and a verb.",
          "\"add a colon after \"From\"\" is not what makes this a fragment. A fragment is anything less than an independent clause, and it must be attached to a complete sentence or given a subject and a verb."
        ]
      },
      {
        "q": "For the sake of a better experience at school, asking his adviser for a new room assignment. The best revision is",
        "o": [
          "leave it as is",
          "For the sake of a better experience at school, the freshman asked his adviser for a new room assignment.",
          "For the sake of a better experience at school; asking his adviser for a new room assignment.",
          "For the sake of a better experience at school asking, his adviser for a new room assignment."
        ],
        "a": 1,
        "why": "Adding a subject and a finite verb (\"the freshman asked\") completes the sentence.",
        "wx": [
          "This is still a fragment: it is less than an independent clause, so it cannot stand alone as a sentence.",
          "",
          "A semicolon can only join two complete sentences. This version still treats a fragment as if it were a complete thought.",
          "This version is still a fragment, or it punctuates a fragment as if it were a complete sentence."
        ]
      },
      {
        "q": "Which is a complete sentence?",
        "o": [
          "Walking to the station in the rain.",
          "She walked to the station in the rain.",
          "After walking to the station in the rain.",
          "To walk to the station in the rain."
        ],
        "a": 1,
        "why": "Only \"She walked...\" has a subject and a finite verb and can stand alone.",
        "wx": [
          "This version is still a fragment, or it punctuates a fragment as if it were a complete sentence.",
          "",
          "This version is still a fragment, or it punctuates a fragment as if it were a complete sentence.",
          "This version is still a fragment, or it punctuates a fragment as if it were a complete sentence."
        ]
      },
      {
        "q": "Which is a fragment?",
        "o": [
          "The kettle whistled.",
          "Owen poured the tea.",
          "Because the kettle whistled.",
          "The tea was ready."
        ],
        "a": 2,
        "why": "A \"because\" clause standing alone is a fragment.",
        "wx": [
          "This version is still a fragment, or it punctuates a fragment as if it were a complete sentence.",
          "This version is still a fragment, or it punctuates a fragment as if it were a complete sentence.",
          "",
          "This version is still a fragment, or it punctuates a fragment as if it were a complete sentence."
        ]
      },
      {
        "q": "Hoping to finish before noon. The best repair is",
        "o": [
          "Hoping to finish before noon, we started at dawn.",
          "Hoping to finish before noon.",
          "Hoping to finish before noon; we started at dawn.",
          "Hoping to finish before noon we, started at dawn."
        ],
        "a": 0,
        "why": "Attach the participial phrase to an independent clause. A semicolon would incorrectly treat the phrase as an independent clause.",
        "wx": [
          "",
          "This version is still a fragment, or it punctuates a fragment as if it were a complete sentence.",
          "A semicolon can only join two complete sentences. This version still treats a fragment as if it were a complete thought.",
          "This version is still a fragment, or it punctuates a fragment as if it were a complete sentence."
        ]
      },
      {
        "q": "A fragment can be repaired by",
        "o": [
          "adding a semicolon at the end",
          "connecting it to an independent clause or adding the missing subject or verb",
          "removing all verbs",
          "changing every comma to a colon"
        ],
        "a": 1,
        "why": "Those are the two official ways to complete a fragment.",
        "wx": [
          "\"adding a semicolon at the end\" is not what makes this a fragment. A fragment is anything less than an independent clause, and it must be attached to a complete sentence or given a subject and a verb.",
          "",
          "\"removing all verbs\" is not what makes this a fragment. A fragment is anything less than an independent clause, and it must be attached to a complete sentence or given a subject and a verb.",
          "\"changing every comma to a colon\" is not what makes this a fragment. A fragment is anything less than an independent clause, and it must be attached to a complete sentence or given a subject and a verb."
        ]
      },
      {
        "q": "On the far side of the island, a dock and two storage sheds. The error is",
        "o": [
          "a missing comma after \"island\"",
          "a missing verb, or a missing independent clause",
          "a run-on",
          "an extra subject"
        ],
        "a": 1,
        "why": "The group has no verb, so it is a fragment.",
        "wx": [
          "\"a missing comma after \"island\"\" is not what makes this a fragment. A fragment is anything less than an independent clause, and it must be attached to a complete sentence or given a subject and a verb.",
          "",
          "\"a run-on\" is not what makes this a fragment. A fragment is anything less than an independent clause, and it must be attached to a complete sentence or given a subject and a verb.",
          "\"an extra subject\" is not what makes this a fragment. A fragment is anything less than an independent clause, and it must be attached to a complete sentence or given a subject and a verb."
        ]
      },
      {
        "q": "Which revision makes a complete sentence?",
        "o": [
          "After the interview.",
          "After the interview, she walked home.",
          "After the interview; she walked home.",
          "After the interview she, walked home."
        ],
        "a": 1,
        "why": "The dependent opener is attached to an independent clause.",
        "wx": [
          "This version is still a fragment, or it punctuates a fragment as if it were a complete sentence.",
          "",
          "A semicolon can only join two complete sentences. This version still treats a fragment as if it were a complete thought.",
          "This version is still a fragment, or it punctuates a fragment as if it were a complete sentence."
        ]
      },
      {
        "q": "The phrase \"including electrical, chemical, and industrial engineering\" cannot stand alone because",
        "o": [
          "lists are never allowed",
          "it is not an independent clause",
          "it contains commas",
          "it starts with a participle"
        ],
        "a": 1,
        "why": "It is only a modifier phrase, not a complete sentence.",
        "wx": [
          "\"lists are never allowed\" is not what makes this a fragment. A fragment is anything less than an independent clause, and it must be attached to a complete sentence or given a subject and a verb.",
          "",
          "\"it contains commas\" is not what makes this a fragment. A fragment is anything less than an independent clause, and it must be attached to a complete sentence or given a subject and a verb.",
          "\"it starts with a participle\" is not what makes this a fragment. A fragment is anything less than an independent clause, and it must be attached to a complete sentence or given a subject and a verb."
        ]
      },
      {
        "q": "Which sentence about the bread is complete?",
        "o": [
          "To keep the bread from drying out.",
          "To keep the bread from drying out, wrap it in cloth.",
          "To keep the bread from drying out; wrap it in cloth.",
          "To keep the bread from drying out wrap, it in cloth."
        ],
        "a": 1,
        "why": "The infinitive phrase is attached to the independent clause \"wrap it in cloth.\"",
        "wx": [
          "This version is still a fragment, or it punctuates a fragment as if it were a complete sentence.",
          "",
          "A semicolon can only join two complete sentences. This version still treats a fragment as if it were a complete thought.",
          "This version is still a fragment, or it punctuates a fragment as if it were a complete sentence."
        ]
      }
    ],
    "bank": [
      {
        "q": "While waiting for the results. This is a fragment because",
        "o": [
          "it is a dependent clause or participial phrase standing alone",
          "it has too many words",
          "it needs a semicolon",
          "\"While\" cannot begin a sentence"
        ],
        "a": 0,
        "why": "A \"while\" phrase or clause must be attached to an independent clause.",
        "wx": [
          "",
          "\"it has too many words\" is not what makes this a fragment. A fragment is anything less than an independent clause, and it must be attached to a complete sentence or given a subject and a verb.",
          "\"it needs a semicolon\" is not what makes this a fragment. A fragment is anything less than an independent clause, and it must be attached to a complete sentence or given a subject and a verb.",
          "\"\"While\" cannot begin a sentence\" is not what makes this a fragment. A fragment is anything less than an independent clause, and it must be attached to a complete sentence or given a subject and a verb."
        ]
      },
      {
        "q": "Which is complete?",
        "o": [
          "Across the river from the mill.",
          "The mill stands across the river.",
          "After crossing the river from the mill.",
          "To stand across the river from the mill."
        ],
        "a": 1,
        "why": "Only the second option has a subject and a finite verb and can stand alone.",
        "wx": [
          "This version is still a fragment, or it punctuates a fragment as if it were a complete sentence.",
          "",
          "This version is still a fragment, or it punctuates a fragment as if it were a complete sentence.",
          "This version is still a fragment, or it punctuates a fragment as if it were a complete sentence."
        ]
      },
      {
        "q": "By measuring the samples twice and averaging the results. A correct repair is",
        "o": [
          "By measuring the samples twice and averaging the results, the team reduced error.",
          "By measuring the samples twice and averaging the results.",
          "By measuring the samples twice and averaging the results; the team reduced error.",
          "By measuring the samples twice, and averaging the results."
        ],
        "a": 0,
        "why": "Attach the \"By...\" phrase to an independent clause.",
        "wx": [
          "",
          "This version is still a fragment, or it punctuates a fragment as if it were a complete sentence.",
          "A semicolon can only join two complete sentences. This version still treats a fragment as if it were a complete thought.",
          "This version is still a fragment, or it punctuates a fragment as if it were a complete sentence."
        ]
      },
      {
        "q": "The intern filing the folders and labeling each box. The best revision adds",
        "o": [
          "a semicolon",
          "a finite verb, as in \"The intern filed the folders and labeled each box.\"",
          "a colon after \"intern\"",
          "a dash after \"folders\""
        ],
        "a": 1,
        "why": "The -ing forms do not give the clause a finite verb until a main verb is added.",
        "wx": [
          "\"a semicolon\" is not what makes this a fragment. A fragment is anything less than an independent clause, and it must be attached to a complete sentence or given a subject and a verb.",
          "",
          "\"a colon after \"intern\"\" is not what makes this a fragment. A fragment is anything less than an independent clause, and it must be attached to a complete sentence or given a subject and a verb.",
          "\"a dash after \"folders\"\" is not what makes this a fragment. A fragment is anything less than an independent clause, and it must be attached to a complete sentence or given a subject and a verb."
        ]
      },
      {
        "q": "Which of these is a fragment?",
        "o": [
          "The door closed.",
          "The latch clicked.",
          "After the door closed.",
          "Someone locked the door."
        ],
        "a": 2,
        "why": "\"After the door closed\" cannot stand alone.",
        "wx": [
          "This version is still a fragment, or it punctuates a fragment as if it were a complete sentence.",
          "This version is still a fragment, or it punctuates a fragment as if it were a complete sentence.",
          "",
          "This version is still a fragment, or it punctuates a fragment as if it were a complete sentence."
        ]
      },
      {
        "q": "A long introductory phrase is still a fragment if",
        "o": [
          "it contains a comma",
          "it is not attached to an independent clause",
          "it starts with a capital letter",
          "it includes a list"
        ],
        "a": 1,
        "why": "Length does not make a group of words a sentence; an independent clause does.",
        "wx": [
          "\"it contains a comma\" is not what makes this a fragment. A fragment is anything less than an independent clause, and it must be attached to a complete sentence or given a subject and a verb.",
          "",
          "\"it starts with a capital letter\" is not what makes this a fragment. A fragment is anything less than an independent clause, and it must be attached to a complete sentence or given a subject and a verb.",
          "\"it includes a list\" is not what makes this a fragment. A fragment is anything less than an independent clause, and it must be attached to a complete sentence or given a subject and a verb."
        ]
      }
    ]
  },
  {
    "id": "runon",
    "part": 2,
    "source": "B",
    "title": "Run-on sentences",
    "rule": "A run-on sentence is made of multiple independent clauses joined by only a comma or no punctuation at all. To find the correct answer, look for a choice that uses one of these three fixes: if one independent clause is an explanation or definition of the other, add a word such as because or which to the beginning of the explanation; if neither clause defines or explains the other, combine them with a comma + conjunction (such as and or but) or with a semicolon; or split them up into two separate sentences.",
    "trap": "Joining two complete sentences with only a comma (a comma splice) or with no punctuation at all.",
    "before": "The dog Mary wants to put in the dog show is a beagle, it is a medium-sized member of the hound family.",
    "after": "The dog Mary wants to put in the dog show is a beagle, which is a medium-sized member of the hound family.",
    "qs": [
      {
        "q": "The dog Mary wants to put in the dog show is a beagle, it is a medium-sized member of the hound family. The best revision is",
        "o": [
          "leave the comma as is",
          "The dog Mary wants to put in the dog show is a beagle, which is a medium-sized member of the hound family.",
          "The dog Mary wants to put in the dog show is a beagle it is a medium-sized member of the hound family.",
          "The dog Mary wants to put in the dog show is a beagle, it, is a medium-sized member of the hound family."
        ],
        "a": 1,
        "why": "The second clause defines what a beagle is, so the official fix adds \"which\" to the start of that explanation.",
        "wx": [
          "This still joins two complete sentences with only a comma, or with no punctuation, which is a run-on.",
          "",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences."
        ]
      },
      {
        "q": "The deli had no milk left after a rush of morning customers, the owner rushed to order more. The best revision is",
        "o": [
          "The deli had no milk left after a rush of morning customers, the owner rushed to order more.",
          "Because the deli had no milk left after a rush of morning customers, the owner rushed to order more.",
          "The deli had no milk left after a rush of morning customers the owner rushed to order more.",
          "The deli had no milk left after a rush of morning customers, the owner, rushed to order more."
        ],
        "a": 1,
        "why": "The first clause explains why the owner ordered more, so the official fix adds \"Because\" to that clause.",
        "wx": [
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences."
        ]
      },
      {
        "q": "My favorite Mediterranean spread is hummus it is very garlicky. The best revision is",
        "o": [
          "My favorite Mediterranean spread is hummus it is very garlicky.",
          "My favorite Mediterranean spread is hummus, as it is very garlicky.",
          "My favorite Mediterranean spread is hummus, it is very garlicky.",
          "My favorite Mediterranean spread is hummus it, is very garlicky."
        ],
        "a": 1,
        "why": "The second clause explains the first. Adding \"as\" (a word like \"because\") correctly joins them.",
        "wx": [
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences."
        ]
      },
      {
        "q": "Air plants like the Tillandsia species are tolerant of a wide range of climates, they thrive in room temperatures. The best revision is",
        "o": [
          "keep the comma only",
          "Air plants like the Tillandsia species are tolerant of a wide range of climates; they thrive in room temperatures.",
          "Air plants like the Tillandsia species are tolerant of a wide range of climates they thrive in room temperatures.",
          "Air plants like the Tillandsia species are tolerant of a wide range of climates, they, thrive in room temperatures."
        ],
        "a": 1,
        "why": "Neither clause defines the other, so a semicolon correctly joins the two independent clauses. A comma alone is a run-on.",
        "wx": [
          "This still joins two complete sentences with only a comma, or with no punctuation, which is a run-on.",
          "",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences."
        ]
      },
      {
        "q": "Deciding which play to put on is only the first step, even a great script won’t succeed without a well-selected cast and a set design that works with the director’s vision. A correct official repair is to",
        "o": [
          "leave the comma as is",
          "split the clauses into two separate sentences: \"Deciding which play to put on is only the first step. Even a great script won’t succeed without a well-selected cast and a set design that works with the director’s vision.\"",
          "remove all punctuation between the clauses",
          "add a comma after \"script\""
        ],
        "a": 1,
        "why": "When the two thoughts should stand apart, the official option is to split them into two sentences.",
        "wx": [
          "This still joins two complete sentences with only a comma, or with no punctuation, which is a run-on.",
          "",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences."
        ]
      },
      {
        "q": "A run-on is made of",
        "o": [
          "a phrase with no verb",
          "multiple independent clauses joined by only a comma or no punctuation at all",
          "a single dependent clause",
          "a list of nouns"
        ],
        "a": 1,
        "why": "That is the official definition of a run-on sentence.",
        "wx": [
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences."
        ]
      },
      {
        "q": "If one independent clause explains or defines the other, a correct fix is to",
        "o": [
          "add only a comma",
          "add a word such as because or which to the beginning of the explanation",
          "delete the second clause’s verb",
          "put a colon after \"because\""
        ],
        "a": 1,
        "why": "That is the first of the three official fixes.",
        "wx": [
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences."
        ]
      },
      {
        "q": "If neither clause defines or explains the other, you may combine them with",
        "o": [
          "a comma alone",
          "a comma + conjunction (such as and or but), or a semicolon",
          "no punctuation",
          "a dash after a fragment"
        ],
        "a": 1,
        "why": "That is the second official fix. A comma alone would leave the run-on in place.",
        "wx": [
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences."
        ]
      },
      {
        "q": "Which sentence is a run-on?",
        "o": [
          "The kettle whistled, so Owen poured the tea.",
          "The kettle whistled, Owen poured the tea.",
          "The kettle whistled. Owen poured the tea.",
          "After the kettle whistled, Owen poured the tea."
        ],
        "a": 1,
        "why": "Two independent clauses joined by only a comma make a comma splice, which is a run-on.",
        "wx": [
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences."
        ]
      },
      {
        "q": "The trail was icy the hikers turned back. A correct repair is",
        "o": [
          "The trail was icy the hikers turned back.",
          "The trail was icy, so the hikers turned back.",
          "The trail was icy, the hikers turned back.",
          "The trail was icy the hikers, turned back."
        ],
        "a": 1,
        "why": "A comma plus the conjunction \"so\" joins the two independent clauses. A comma alone would still be a run-on.",
        "wx": [
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences."
        ]
      },
      {
        "q": "Which revision of \"The lab closed it had no power\" correctly uses a semicolon?",
        "o": [
          "The lab closed it had no power.",
          "The lab closed; it had no power.",
          "The lab closed; because it had no power.",
          "The lab; closed it had no power."
        ],
        "a": 1,
        "why": "A semicolon must have a complete sentence on both sides. \"Because it had no power\" is not an independent clause.",
        "wx": [
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "",
          "A semicolon must have a complete sentence on both sides. The part after the semicolon here is not an independent clause.",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences."
        ]
      },
      {
        "q": "The third official way to repair a run-on is to",
        "o": [
          "add another comma",
          "split the independent clauses into two separate sentences",
          "remove both subjects",
          "change the period to a comma"
        ],
        "a": 1,
        "why": "Splitting the clauses into two sentences is the third official fix.",
        "wx": [
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences."
        ]
      }
    ],
    "bank": [
      {
        "q": "Which of these is not a run-on?",
        "o": [
          "The bus stalled, we walked.",
          "The bus stalled, so we walked.",
          "The bus stalled we walked.",
          "The bus stalled, we, walked."
        ],
        "a": 1,
        "why": "A comma plus the conjunction \"so\" correctly joins the two sentences.",
        "wx": [
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences."
        ]
      },
      {
        "q": "The museum was crowded we left early. The error is",
        "o": [
          "a fragment",
          "two independent clauses with no punctuation between them",
          "a missing subject",
          "a misplaced modifier"
        ],
        "a": 1,
        "why": "Two complete sentences jammed together with no punctuation are a run-on.",
        "wx": [
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences."
        ]
      },
      {
        "q": "To join \"The sky darkened\" and \"the picnic ended\" when neither clause defines the other, use",
        "o": [
          "The sky darkened, the picnic ended.",
          "The sky darkened, and the picnic ended.",
          "The sky darkened the picnic ended.",
          "The sky darkened, the picnic, ended."
        ],
        "a": 1,
        "why": "A comma + conjunction is one official way to join two related independent clauses that do not define each other.",
        "wx": [
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences."
        ]
      },
      {
        "q": "\"The soup was cold, it had been sitting out.\" A fix that treats the second clause as an explanation is",
        "o": [
          "The soup was cold, it had been sitting out.",
          "The soup was cold because it had been sitting out.",
          "The soup was cold it had been sitting out.",
          "The soup, was cold, it had been sitting out."
        ],
        "a": 1,
        "why": "Adding \"because\" to the explaining clause is the official first fix.",
        "wx": [
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences."
        ]
      },
      {
        "q": "A comma splice is",
        "o": [
          "a missing verb",
          "two independent clauses joined by only a comma",
          "a list with no \"and\"",
          "a colon after a fragment"
        ],
        "a": 1,
        "why": "A comma splice is a kind of run-on.",
        "wx": [
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences."
        ]
      },
      {
        "q": "Which sentence correctly splits a long run-on into two sentences?",
        "o": [
          "The first draft was messy, the revision was clear.",
          "The first draft was messy. The revision was clear.",
          "The first draft was messy the revision was clear.",
          "The first draft was messy, the revision, was clear."
        ],
        "a": 1,
        "why": "A period separates the two independent clauses into two sentences, which is an official fix.",
        "wx": [
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences.",
          "This version does not use one of the official run-on repairs: add because or which, use a comma plus a conjunction or a semicolon, or split the clauses into two sentences."
        ]
      }
    ]
  },
  {
    "id": "depsubj",
    "part": 2,
    "source": "B",
    "title": "Dependent clauses as sentence subjects",
    "rule": "Sometimes, instead of having a simple noun for a subject, a sentence can use a whole dependent clause as a subject. When this happens, treat the dependent clause as a singular noun. One trick is to replace the clause with a singular noun, such as Albert Einstein, to see whether the sentence still works. Do not add an extra \"which\" that leaves the clause without a main verb relationship.",
    "trap": "Treating a long subject clause as plural (\"are geniuses\") because words inside it are plural, or inserting an extra \"which\" after the clause.",
    "before": "Whoever came up with the idea to put solar panels on rooftops are geniuses.",
    "after": "Whoever came up with the idea to put solar panels on rooftops is a genius.",
    "qs": [
      {
        "q": "Whoever came up with the idea to put solar panels on rooftops are geniuses. The best revision is",
        "o": [
          "Whoever came up with the idea to put solar panels on rooftops are geniuses.",
          "Whoever came up with the idea to put solar panels on rooftops is a genius.",
          "Whoever came up with the idea to put solar panels on rooftops are a genius.",
          "Whoever came up with the idea to put solar panels on rooftops is geniuses."
        ],
        "a": 1,
        "why": "The whole clause \"Whoever came up with the idea...\" is the subject and is treated as singular, so the verb is \"is\" and the complement is \"a genius.\"",
        "wx": [
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular.",
          "",
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular.",
          "The verb is singular, but the complement is still plural. Treat the whole subject clause as singular: for example, \"is a genius.\""
        ]
      },
      {
        "q": "That cleaning a kitchen is a repetitive chore which makes it especially thankless. The best revision is",
        "o": [
          "leave the \"which\" in",
          "That cleaning a kitchen is a repetitive chore makes it especially thankless.",
          "That cleaning a kitchen is a repetitive chore which make it especially thankless.",
          "That cleaning a kitchen are a repetitive chore makes it especially thankless."
        ],
        "a": 1,
        "why": "The clause \"That cleaning a kitchen is a repetitive chore\" is the singular subject of \"makes.\" The extra \"which\" is not needed and breaks the sentence.",
        "wx": [
          "The extra \"which\" leaves the subject clause without a clear main verb. Drop it so the clause can take the verb directly.",
          "",
          "The extra \"which\" leaves the subject clause without a clear main verb. Drop it so the clause can take the verb directly.",
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular."
        ]
      },
      {
        "q": "A dependent clause used as a subject should be treated as",
        "o": [
          "plural if any noun inside it is plural",
          "a singular noun",
          "an object pronoun",
          "a fragment"
        ],
        "a": 1,
        "why": "The official rule is to treat the whole dependent clause as a singular noun.",
        "wx": [
          "This version does not treat the dependent clause as a singular subject.",
          "",
          "This version does not treat the dependent clause as a singular subject.",
          "This version does not treat the dependent clause as a singular subject."
        ]
      },
      {
        "q": "A trick for checking the verb after a subject clause is to",
        "o": [
          "count the words in the clause",
          "replace the clause with a singular noun, such as Albert Einstein, and see whether the sentence still works",
          "always use \"are\"",
          "add \"which\" before the verb"
        ],
        "a": 1,
        "why": "That is the official test. \"Albert Einstein are geniuses\" does not work, so the verb must be singular.",
        "wx": [
          "This version does not treat the dependent clause as a singular subject.",
          "",
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular.",
          "The extra \"which\" leaves the subject clause without a clear main verb. Drop it so the clause can take the verb directly."
        ]
      },
      {
        "q": "What the committee decided yesterday ___ now posted on the door.",
        "o": [
          "are",
          "is",
          "were",
          "have been"
        ],
        "a": 1,
        "why": "\"What the committee decided yesterday\" is a subject clause and is treated as singular, so \"is\" agrees.",
        "wx": [
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular.",
          "",
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular.",
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular."
        ]
      },
      {
        "q": "How the two teams share the field ___ still unclear.",
        "o": [
          "remain",
          "remains",
          "are remaining",
          "have remain"
        ],
        "a": 1,
        "why": "The subject is the whole clause \"How the two teams share the field,\" which takes a singular verb.",
        "wx": [
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular.",
          "",
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular.",
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular."
        ]
      },
      {
        "q": "Whoever left the windows open ___ responsible for the draft.",
        "o": [
          "are",
          "is",
          "were",
          "have been"
        ],
        "a": 1,
        "why": "\"Whoever left the windows open\" is one singular subject clause, so use \"is.\"",
        "wx": [
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular.",
          "",
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular.",
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular."
        ]
      },
      {
        "q": "That the samples were contaminated ___ the experiment.",
        "o": [
          "ruin",
          "ruins",
          "have ruined only if",
          "are ruining because they"
        ],
        "a": 1,
        "why": "The subject clause is singular, so \"ruins\" (or a singular verb) agrees. Do not let \"samples\" pull the verb into the plural.",
        "wx": [
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular.",
          "",
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular.",
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular."
        ]
      },
      {
        "q": "Which sentence treats the subject clause correctly?",
        "o": [
          "Why the pipes burst are a mystery.",
          "Why the pipes burst is a mystery.",
          "Why the pipes burst were a mystery.",
          "Why the pipes burst have been mysteries."
        ],
        "a": 1,
        "why": "\"Why the pipes burst\" is a singular subject, even though \"pipes\" is plural.",
        "wx": [
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular.",
          "",
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular.",
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular."
        ]
      },
      {
        "q": "The error in \"Whoever designed these ramps are engineers\" is that",
        "o": [
          "\"Whoever\" cannot be a subject",
          "the subject clause is singular, so the verb should be \"is\" (and \"an engineer,\" if you match the complement)",
          "racks need a semicolon",
          "\"these ramps\" must be deleted"
        ],
        "a": 1,
        "why": "Words inside the clause do not make the whole subject plural.",
        "wx": [
          "This version does not treat the dependent clause as a singular subject.",
          "",
          "This version does not treat the dependent clause as a singular subject.",
          "This version does not treat the dependent clause as a singular subject."
        ]
      },
      {
        "q": "When a subject clause is followed by an extra \"which,\" the usual problem is that",
        "o": [
          "the sentence becomes a question",
          "the clause is no longer clearly doing the main verb, so the sentence breaks",
          "the verb must be plural",
          "a colon is required"
        ],
        "a": 1,
        "why": "The official kitchen-cleaning example is repaired by removing the extra \"which.\"",
        "wx": [
          "This version does not treat the dependent clause as a singular subject.",
          "",
          "This version does not treat the dependent clause as a singular subject.",
          "This version does not treat the dependent clause as a singular subject."
        ]
      },
      {
        "q": "Where the maps are stored ___ marked on this chart.",
        "o": [
          "are",
          "is",
          "were",
          "have"
        ],
        "a": 1,
        "why": "The subject is the clause \"Where the maps are stored,\" which is treated as singular.",
        "wx": [
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular.",
          "",
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular.",
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular."
        ]
      }
    ],
    "bank": [
      {
        "q": "Replacing \"Whoever came up with the idea...\" with \"Albert Einstein\" shows that",
        "o": [
          "the verb should stay plural",
          "\"Albert Einstein are geniuses\" fails, so the verb must be singular",
          "the clause is an object",
          "a comma is missing"
        ],
        "a": 1,
        "why": "That is the official trick for testing the verb.",
        "wx": [
          "This version does not treat the dependent clause as a singular subject.",
          "",
          "This version does not treat the dependent clause as a singular subject.",
          "This version does not treat the dependent clause as a singular subject."
        ]
      },
      {
        "q": "Whatever she recommended last week ___ still on the list.",
        "o": [
          "remain",
          "remains",
          "are",
          "have been remaining"
        ],
        "a": 1,
        "why": "The subject clause is singular, so \"remains\" agrees.",
        "wx": [
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular.",
          "",
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular.",
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular."
        ]
      },
      {
        "q": "Which revision of \"That the door stuck which delayed us\" is correct?",
        "o": [
          "That the door stuck which delayed us.",
          "That the door stuck delayed us.",
          "That the door stuck which delay us.",
          "That the door stuck, which, delayed us."
        ],
        "a": 1,
        "why": "Drop the extra \"which\" so the subject clause can take the main verb \"delayed.\"",
        "wx": [
          "The extra \"which\" leaves the subject clause without a clear main verb. Drop it so the clause can take the verb directly.",
          "",
          "The extra \"which\" leaves the subject clause without a clear main verb. Drop it so the clause can take the verb directly.",
          "The extra \"which\" leaves the subject clause without a clear main verb. Drop it so the clause can take the verb directly."
        ]
      },
      {
        "q": "Whether the results hold ___ a separate question.",
        "o": [
          "are",
          "is",
          "were",
          "have been"
        ],
        "a": 1,
        "why": "\"Whether the results hold\" is a singular subject clause.",
        "wx": [
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular.",
          "",
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular.",
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular."
        ]
      },
      {
        "q": "A plural noun inside a subject clause",
        "o": [
          "makes the verb plural",
          "does not change the rule: the whole clause is still treated as singular",
          "requires a semicolon",
          "must be moved after the verb"
        ],
        "a": 1,
        "why": "Agreement is with the clause as a whole, not with a noun inside it.",
        "wx": [
          "This version does not treat the dependent clause as a singular subject.",
          "",
          "This version does not treat the dependent clause as a singular subject.",
          "This version does not treat the dependent clause as a singular subject."
        ]
      },
      {
        "q": "Which sentence is correct?",
        "o": [
          "How they found the cave remain unknown.",
          "How they found the cave remains unknown.",
          "How they found the cave are unknown.",
          "How they found the cave were unknown."
        ],
        "a": 1,
        "why": "The subject clause takes a singular verb: \"remains.\"",
        "wx": [
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular.",
          "",
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular.",
          "This version uses a plural verb (or a plural complement). The whole subject clause is treated as a singular noun, so the verb must be singular."
        ]
      }
    ]
  },
  {
    "id": "parallel",
    "part": 2,
    "source": "B",
    "title": "Parallel construction",
    "rule": "To use parallel construction is to write a list in which all the items have the same grammatical format. For example, if two things in a list are verbs ending in -ing, the third item should also be a verb ending in -ing. If one item in a list is a prepositional phrase, then the second item should also be a prepositional phrase.",
    "trap": "Mixing forms in a list or pair: \"hiking, to swim, and she likes biking,\" or adding a full clause when the other items are verbs or phrases.",
    "before": "The couple bought the concert tickets, arrived at the theater, and they sat down in their seats.",
    "after": "The couple bought the concert tickets, arrived at the theater, and sat down in their seats.",
    "qs": [
      {
        "q": "The couple bought the concert tickets, arrived at the theater, and they sat down in their seats. The best revision is",
        "o": [
          "leave \"they sat\" as is",
          "The couple bought the concert tickets, arrived at the theater, and sat down in their seats.",
          "The couple bought the concert tickets, arrived at the theater, and they sitting down in their seats.",
          "The couple bought the concert tickets, arrived at the theater, and to sit down in their seats."
        ],
        "a": 1,
        "why": "Match the simple past verbs \"bought\" and \"arrived\" with \"sat,\" not a new clause starting with \"they.\"",
        "wx": [
          "Leaving this wording keeps the list items in different grammatical forms. Every item needs the same form.",
          "",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form."
        ]
      },
      {
        "q": "Painting your bedroom requires picking a color, measuring the walls, get the right tools, and buying paint. The best revision is",
        "o": [
          "Painting your bedroom requires picking a color, measuring the walls, get the right tools, and buying paint.",
          "Painting your bedroom requires picking a color, measuring the walls, getting the right tools, and buying paint.",
          "Painting your bedroom requires picking a color, measuring the walls, to get the right tools, and buying paint.",
          "Painting your bedroom requires picking a color, measuring the walls, you get the right tools, and buying paint."
        ],
        "a": 1,
        "why": "The other items are -ing forms (\"picking,\" \"measuring,\" \"buying\"), so \"getting\" is the parallel form.",
        "wx": [
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form."
        ]
      },
      {
        "q": "The workshop had a whiteboard on one wall, a set of shelves against another wall, and a third wall had many drawers for tools. The best revision is",
        "o": [
          "keep \"a third wall had\"",
          "The workshop had a whiteboard on one wall, a set of shelves against another wall, and many drawers for tools along a third wall.",
          "The workshop had a whiteboard on one wall, a set of shelves against another wall, and a third wall having many drawers for tools.",
          "The workshop had a whiteboard on one wall, a set of shelves against another wall, and there were many drawers for tools on a third wall."
        ],
        "a": 1,
        "why": "The first two items are objects of \"had\" (noun phrases with location phrases). The third item should be the same: \"many drawers for tools along a third wall.\"",
        "wx": [
          "Leaving this wording keeps the list items in different grammatical forms. Every item needs the same form.",
          "",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form."
        ]
      },
      {
        "q": "Her essay focused on characters' reactions to bad news and showing how these characters handled success. The best revision is",
        "o": [
          "Her essay focused on characters' reactions to bad news and showing how these characters handled success.",
          "Her essay focused on characters' reactions to bad news and showed how these characters handled success.",
          "Her essay focused on characters' reactions to bad news and to show how these characters handled success.",
          "Her essay focused on characters' reactions to bad news and it showing how these characters handled success."
        ],
        "a": 1,
        "why": "Pair the past-tense verb \"focused\" with \"showed,\" not with the -ing form \"showing.\"",
        "wx": [
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form."
        ]
      },
      {
        "q": "The job requires writing reports, leading meetings, and ___",
        "o": [
          "to train staff",
          "training staff",
          "staff training is needed",
          "you train staff"
        ],
        "a": 1,
        "why": "Match \"writing\" and \"leading\" with \"training.\"",
        "wx": [
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form."
        ]
      },
      {
        "q": "The coach was not only strict but also ___",
        "o": [
          "she was fair",
          "fair",
          "being fair",
          "fairly"
        ],
        "a": 1,
        "why": "\"Strict\" is an adjective, so the matching item is the adjective \"fair.\"",
        "wx": [
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form."
        ]
      },
      {
        "q": "She likes hiking, swimming, and ___",
        "o": [
          "to bike",
          "biking",
          "she bikes",
          "a bike ride is nice"
        ],
        "a": 1,
        "why": "Keep the -ing form used in \"hiking\" and \"swimming.\"",
        "wx": [
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form."
        ]
      },
      {
        "q": "Which list is parallel?",
        "o": [
          "to plan, organizing, and she scheduled",
          "to plan, to organize, and to schedule",
          "planning, to organize, and scheduled",
          "plan, organizing, and she schedules"
        ],
        "a": 1,
        "why": "All three items are infinitives.",
        "wx": [
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form."
        ]
      },
      {
        "q": "The trail is popular for its views, for its shade, and ___",
        "o": [
          "because it has water",
          "for its water",
          "it has water",
          "having water too"
        ],
        "a": 1,
        "why": "The first two items are prepositional phrases beginning with \"for,\" so the third should be \"for its water.\"",
        "wx": [
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form."
        ]
      },
      {
        "q": "He wanted to finish the draft, to check the facts, and ___",
        "o": [
          "revising the ending",
          "to revise the ending",
          "he revised the ending",
          "a revised ending"
        ],
        "a": 1,
        "why": "Match the other \"to\" verbs with \"to revise.\"",
        "wx": [
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form."
        ]
      },
      {
        "q": "The error in \"both patient and he was thorough\" is that",
        "o": [
          "\"both\" cannot start a pair",
          "the two items joined by \"both...and\" are not in the same form",
          "a semicolon is required",
          "\"thorough\" must be a verb"
        ],
        "a": 1,
        "why": "\"Both patient and thorough\" (two adjectives) would be parallel; \"he was thorough\" breaks the pattern.",
        "wx": [
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form."
        ]
      },
      {
        "q": "Which revision of \"She will call the office, email the form, and she is faxing the receipt\" is parallel?",
        "o": [
          "She will call the office, email the form, and she is faxing the receipt.",
          "She will call the office, email the form, and fax the receipt.",
          "She will call the office, email the form, and to fax the receipt.",
          "She will call the office, email the form, and faxing the receipt."
        ],
        "a": 1,
        "why": "Match the bare verbs \"call\" and \"email\" (after \"will\") with \"fax.\"",
        "wx": [
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form."
        ]
      }
    ],
    "bank": [
      {
        "q": "If two items in a list are prepositional phrases, the third item should be",
        "o": [
          "a full independent clause",
          "a prepositional phrase as well",
          "an -ing verb only",
          "a question"
        ],
        "a": 1,
        "why": "All items in the list should have the same grammatical format.",
        "wx": [
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form."
        ]
      },
      {
        "q": "The recipe says to chop the herbs, to warm the oil, and ___",
        "o": [
          "mixing the spices",
          "to mix the spices",
          "you mix the spices",
          "spices should be mixed"
        ],
        "a": 1,
        "why": "Keep the infinitive pattern: \"to mix.\"",
        "wx": [
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form."
        ]
      },
      {
        "q": "Which pair is not parallel?",
        "o": [
          "reading and writing",
          "reading and to write",
          "to read and to write",
          "read and write"
        ],
        "a": 1,
        "why": "\"Reading\" and \"to write\" do not share the same form.",
        "wx": [
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form."
        ]
      },
      {
        "q": "The mural is colorful, detailed, and ___",
        "o": [
          "it is large",
          "large",
          "being large",
          "it being large"
        ],
        "a": 1,
        "why": "Match the adjectives \"colorful\" and \"detailed\" with \"large.\"",
        "wx": [
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form."
        ]
      },
      {
        "q": "They planned on arriving early, on finding seats, and ___",
        "o": [
          "to stay until the end",
          "on staying until the end",
          "they stayed until the end",
          "stayed until the end"
        ],
        "a": 1,
        "why": "The first two items are \"on\" + -ing, so the third should be \"on staying until the end.\"",
        "wx": [
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form."
        ]
      },
      {
        "q": "A list is parallel when",
        "o": [
          "the last item is the longest",
          "every item has the same grammatical format",
          "each item starts with a capital letter",
          "the list has exactly three items"
        ],
        "a": 1,
        "why": "That is the official definition of parallel construction.",
        "wx": [
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form.",
          "This version breaks parallel structure: the items in the list or pair are not in the same grammatical form."
        ]
      }
    ]
  },
  {
    "id": "case",
    "part": 2,
    "source": "B",
    "title": "Subject vs object pronouns",
    "rule": "Nouns and pronouns can be either the subjects or the objects of verbs. Subjects do verbs and objects have verbs done to them. Unlike nouns, pronouns change form depending on whether they are subjects or objects (I/me, he/him, she/her, we/us, they/them). If you are trying to figure out whether to use a subject or object pronoun in a compound noun, take out the other noun and try the sentence with just the pronoun.",
    "trap": "Choosing \"I\" in a compound object (\"my friends and I\" after a verb or preposition) because it sounds more formal. This topic is only subject vs. object forms such as I/me; who vs. whom is practiced separately.",
    "before": "The tourists asked my friends and I for directions.",
    "after": "The tourists asked my friends and me for directions.",
    "qs": [
      {
        "q": "Me and my parents ate dinner. The best revision is",
        "o": [
          "Me and my parents ate dinner.",
          "My parents and I ate dinner.",
          "My parents and me ate dinner.",
          "I and me and my parents ate dinner."
        ],
        "a": 1,
        "why": "Drop \"my parents\": \"Me ate dinner\" is wrong, so the subject form \"I\" is required.",
        "wx": [
          "\"Me and my parents ate dinner.\" uses an object form (me, him, her, us, them) where a subject is needed. Drop the other person and try the pronoun alone: you would not say \"me ate dinner.\"",
          "",
          "\"My parents and me ate dinner.\" uses an object form (me, him, her, us, them) where a subject is needed. Drop the other person and try the pronoun alone: you would not say \"me ate dinner.\"",
          "\"I and me and my parents ate dinner.\" mixes subject and object forms. Drop the other person and try the pronoun alone to hear which case you need."
        ]
      },
      {
        "q": "The tourists asked my friends and I for directions. The best revision is",
        "o": [
          "The tourists asked my friends and I for directions.",
          "The tourists asked my friends and me for directions.",
          "The tourists asked I and my friends for directions.",
          "The tourists asked my friends and I, for directions."
        ],
        "a": 1,
        "why": "Drop \"my friends\": \"asked I\" is wrong. The pronoun is an object of \"asked,\" so use \"me.\"",
        "wx": [
          "\"The tourists asked my friends and I for directions.\" uses a subject form (I, he, she, we, they) where an object is needed. Drop the other person and try the pronoun alone: you would not say \"asked I\" or \"to I.\"",
          "",
          "\"The tourists asked I and my friends for directions.\" uses a subject form (I, he, she, we, they) where an object is needed. Drop the other person and try the pronoun alone: you would not say \"asked I\" or \"to I.\"",
          "\"The tourists asked my friends and I, for directions.\" uses a subject form (I, he, she, we, they) where an object is needed. Drop the other person and try the pronoun alone: you would not say \"asked I\" or \"to I.\""
        ]
      },
      {
        "q": "The Girl Scouts sold cookies to my sister and I. The best revision is",
        "o": [
          "The Girl Scouts sold cookies to my sister and I.",
          "The Girl Scouts sold cookies to my sister and me.",
          "The Girl Scouts sold cookies to I and my sister.",
          "The Girl Scouts sold cookies to my sister and I,."
        ],
        "a": 1,
        "why": "\"To I\" is clearly wrong. After the preposition \"to,\" use the object form \"me.\"",
        "wx": [
          "\"The Girl Scouts sold cookies to my sister and I.\" uses a subject form (I, he, she, we, they) where an object is needed. Drop the other person and try the pronoun alone: you would not say \"asked I\" or \"to I.\"",
          "",
          "\"The Girl Scouts sold cookies to I and my sister.\" uses a subject form (I, he, she, we, they) where an object is needed. Drop the other person and try the pronoun alone: you would not say \"asked I\" or \"to I.\"",
          "\"The Girl Scouts sold cookies to my sister and I,.\" uses a subject form (I, he, she, we, they) where an object is needed. Drop the other person and try the pronoun alone: you would not say \"asked I\" or \"to I.\""
        ]
      },
      {
        "q": "Between you and ___, the second plan is stronger.",
        "o": [
          "I",
          "me",
          "myself",
          "mine"
        ],
        "a": 1,
        "why": "\"Between\" is a preposition, so it takes the object form \"me.\"",
        "wx": [
          "\"I\" uses a subject form (I, he, she, we, they) where an object is needed. Drop the other person and try the pronoun alone: you would not say \"asked I\" or \"to I.\"",
          "",
          "\"myself\" is not the subject or object form needed here.",
          "\"mine\" is not the subject or object form needed here."
        ]
      },
      {
        "q": "___ finished the lab report before noon.",
        "o": [
          "Her and I",
          "She and I",
          "Her and me",
          "She and me"
        ],
        "a": 1,
        "why": "The pronouns are the subjects of \"finished,\" so use \"She and I.\" Test: \"She finished\" and \"I finished.\"",
        "wx": [
          "\"Her and I\" mixes subject and object forms. Drop the other person and try the pronoun alone to hear which case you need.",
          "",
          "\"Her and me\" uses an object form (me, him, her, us, them) where a subject is needed. Drop the other person and try the pronoun alone: you would not say \"me ate dinner.\"",
          "\"She and me\" mixes subject and object forms. Drop the other person and try the pronoun alone to hear which case you need."
        ]
      },
      {
        "q": "The prize was awarded to Owen and ___.",
        "o": [
          "I",
          "me",
          "myself",
          "she"
        ],
        "a": 1,
        "why": "After \"to,\" use the object form \"me.\" Test: \"awarded to me,\" not \"awarded to I.\"",
        "wx": [
          "\"I\" uses a subject form (I, he, she, we, they) where an object is needed. Drop the other person and try the pronoun alone: you would not say \"asked I\" or \"to I.\"",
          "",
          "\"myself\" is not the subject or object form needed here.",
          "\"she\" uses a subject form (I, he, she, we, they) where an object is needed. Drop the other person and try the pronoun alone: you would not say \"asked I\" or \"to I.\""
        ]
      },
      {
        "q": "Which sentence is correct?",
        "o": [
          "Us volunteers stacked the chairs.",
          "We volunteers stacked the chairs.",
          "We volunteers, stacked the chairs them.",
          "Us stacked we the chairs."
        ],
        "a": 1,
        "why": "The pronoun is the subject (with the appositive \"volunteers\"), so \"We\" is correct. Test: \"We stacked the chairs.\"",
        "wx": [
          "\"Us volunteers stacked the chairs.\" uses an object form (me, him, her, us, them) where a subject is needed. Drop the other person and try the pronoun alone: you would not say \"me ate dinner.\"",
          "",
          "\"We volunteers, stacked the chairs them.\" mixes subject and object forms. Drop the other person and try the pronoun alone to hear which case you need.",
          "\"Us stacked we the chairs.\" mixes subject and object forms. Drop the other person and try the pronoun alone to hear which case you need."
        ]
      },
      {
        "q": "The manager sat beside Maya and ___.",
        "o": [
          "I",
          "me",
          "he",
          "she"
        ],
        "a": 1,
        "why": "\"Beside\" is a preposition and takes the object form \"me.\"",
        "wx": [
          "\"I\" uses a subject form (I, he, she, we, they) where an object is needed. Drop the other person and try the pronoun alone: you would not say \"asked I\" or \"to I.\"",
          "",
          "\"he\" uses a subject form (I, he, she, we, they) where an object is needed. Drop the other person and try the pronoun alone: you would not say \"asked I\" or \"to I.\"",
          "\"she\" uses a subject form (I, he, she, we, they) where an object is needed. Drop the other person and try the pronoun alone: you would not say \"asked I\" or \"to I.\""
        ]
      },
      {
        "q": "Please send the notes to them and ___.",
        "o": [
          "I",
          "me",
          "we",
          "she"
        ],
        "a": 1,
        "why": "The pronoun is an object of \"to,\" so \"me\" is correct.",
        "wx": [
          "\"I\" uses a subject form (I, he, she, we, they) where an object is needed. Drop the other person and try the pronoun alone: you would not say \"asked I\" or \"to I.\"",
          "",
          "\"we\" uses a subject form (I, he, she, we, they) where an object is needed. Drop the other person and try the pronoun alone: you would not say \"asked I\" or \"to I.\"",
          "\"she\" uses a subject form (I, he, she, we, they) where an object is needed. Drop the other person and try the pronoun alone: you would not say \"asked I\" or \"to I.\""
        ]
      },
      {
        "q": "Which compound subject is correct?",
        "o": [
          "Him and her arrived early.",
          "He and she arrived early.",
          "Him and she arrived early.",
          "He and her arrived early."
        ],
        "a": 1,
        "why": "Both pronouns are subjects of \"arrived,\" so use \"He and she.\"",
        "wx": [
          "\"Him and her arrived early.\" uses an object form (me, him, her, us, them) where a subject is needed. Drop the other person and try the pronoun alone: you would not say \"me ate dinner.\"",
          "",
          "\"Him and she arrived early.\" mixes subject and object forms. Drop the other person and try the pronoun alone to hear which case you need.",
          "\"He and her arrived early.\" mixes subject and object forms. Drop the other person and try the pronoun alone to hear which case you need."
        ]
      },
      {
        "q": "The instructor asked them and ___ to stay.",
        "o": [
          "I",
          "me",
          "we",
          "he"
        ],
        "a": 1,
        "why": "\"Asked\" takes an object: \"asked me,\" not \"asked I.\"",
        "wx": [
          "\"I\" uses a subject form (I, he, she, we, they) where an object is needed. Drop the other person and try the pronoun alone: you would not say \"asked I\" or \"to I.\"",
          "",
          "\"we\" uses a subject form (I, he, she, we, they) where an object is needed. Drop the other person and try the pronoun alone: you would not say \"asked I\" or \"to I.\"",
          "\"he\" uses a subject form (I, he, she, we, they) where an object is needed. Drop the other person and try the pronoun alone: you would not say \"asked I\" or \"to I.\""
        ]
      },
      {
        "q": "A reliable test for I vs. me in \"the host greeted Luca and ___ \" is to",
        "o": [
          "always choose I because it sounds formal",
          "drop \"Luca and\" and try the sentence with just the pronoun: \"greeted me\" is correct",
          "choose whichever pronoun is longer",
          "use myself instead"
        ],
        "a": 1,
        "why": "That is the official drop-the-other-noun trick.",
        "wx": [
          "\"always choose I because it sounds formal\" uses a subject form (I, he, she, we, they) where an object is needed. Drop the other person and try the pronoun alone: you would not say \"asked I\" or \"to I.\"",
          "",
          "\"choose whichever pronoun is longer\" is the wrong pronoun case here. Use a subject form for the doer and an object form after a verb or a preposition.",
          "\"use myself instead\" is the wrong pronoun case here. Use a subject form for the doer and an object form after a verb or a preposition."
        ]
      }
    ],
    "bank": [
      {
        "q": "Which sentence uses an object pronoun correctly?",
        "o": [
          "The letter was for she and I.",
          "The letter was for her and me.",
          "The letter was for she and me.",
          "The letter was for her and I."
        ],
        "a": 1,
        "why": "After \"for,\" both pronouns are objects: \"her and me.\"",
        "wx": [
          "\"The letter was for she and I.\" uses a subject form (I, he, she, we, they) where an object is needed. Drop the other person and try the pronoun alone: you would not say \"asked I\" or \"to I.\"",
          "",
          "\"The letter was for she and me.\" mixes subject and object forms. Drop the other person and try the pronoun alone to hear which case you need.",
          "\"The letter was for her and I.\" mixes subject and object forms. Drop the other person and try the pronoun alone to hear which case you need."
        ]
      },
      {
        "q": "\"___ walked to the station.\" The subject pair is",
        "o": [
          "Her and me",
          "She and I",
          "Her and I",
          "She and me"
        ],
        "a": 1,
        "why": "Subjects take \"She and I.\"",
        "wx": [
          "\"Her and me\" uses an object form (me, him, her, us, them) where a subject is needed. Drop the other person and try the pronoun alone: you would not say \"me ate dinner.\"",
          "",
          "\"Her and I\" mixes subject and object forms. Drop the other person and try the pronoun alone to hear which case you need.",
          "\"She and me\" mixes subject and object forms. Drop the other person and try the pronoun alone to hear which case you need."
        ]
      },
      {
        "q": "Dad baked a cake for my brother and ___.",
        "o": [
          "I",
          "me",
          "we",
          "he"
        ],
        "a": 1,
        "why": "After \"for,\" use \"me.\"",
        "wx": [
          "\"I\" uses a subject form (I, he, she, we, they) where an object is needed. Drop the other person and try the pronoun alone: you would not say \"asked I\" or \"to I.\"",
          "",
          "\"we\" uses a subject form (I, he, she, we, they) where an object is needed. Drop the other person and try the pronoun alone: you would not say \"asked I\" or \"to I.\"",
          "\"he\" uses a subject form (I, he, she, we, they) where an object is needed. Drop the other person and try the pronoun alone: you would not say \"asked I\" or \"to I.\""
        ]
      },
      {
        "q": "The error in \"Sold cookies to my sister and I\" is that",
        "o": [
          "\"sister\" should be possessive",
          "\"I\" is a subject form used as the object of the preposition \"to\"",
          "a semicolon is missing",
          "\"cookies\" must be singular"
        ],
        "a": 1,
        "why": "The official Girl Scout example is repaired with \"me.\"",
        "wx": [
          "\"\"sister\" should be possessive\" is the wrong pronoun case here. Use a subject form for the doer and an object form after a verb or a preposition.",
          "",
          "\"a semicolon is missing\" is the wrong pronoun case here. Use a subject form for the doer and an object form after a verb or a preposition.",
          "\"\"cookies\" must be singular\" is the wrong pronoun case here. Use a subject form for the doer and an object form after a verb or a preposition."
        ]
      },
      {
        "q": "Which is a subject pronoun?",
        "o": [
          "him",
          "he",
          "them",
          "us"
        ],
        "a": 1,
        "why": "Subject forms include I, he, she, we, and they. \"He\" is the subject form of \"him.\"",
        "wx": [
          "\"him\" uses an object form (me, him, her, us, them) where a subject is needed. Drop the other person and try the pronoun alone: you would not say \"me ate dinner.\"",
          "",
          "\"them\" uses an object form (me, him, her, us, them) where a subject is needed. Drop the other person and try the pronoun alone: you would not say \"me ate dinner.\"",
          "\"us\" uses an object form (me, him, her, us, them) where a subject is needed. Drop the other person and try the pronoun alone: you would not say \"me ate dinner.\""
        ]
      },
      {
        "q": "Try the official trick on \"The coach trusted Ali and I.\" Removing \"Ali and\" leaves",
        "o": [
          "\"trusted I,\" which is correct, so keep I",
          "\"trusted I,\" which is wrong, so the pronoun should be \"me\"",
          "\"trusted I,\" which needs a colon",
          "\"trusted I,\" which needs a dash"
        ],
        "a": 1,
        "why": "The remaining pronoun is an object of \"trusted,\" so \"me\" is required.",
        "wx": [
          "\"\"trusted I,\" which is correct, so keep I\" uses a subject form (I, he, she, we, they) where an object is needed. Drop the other person and try the pronoun alone: you would not say \"asked I\" or \"to I.\"",
          "",
          "\"\"trusted I,\" which needs a colon\" uses a subject form (I, he, she, we, they) where an object is needed. Drop the other person and try the pronoun alone: you would not say \"asked I\" or \"to I.\"",
          "\"\"trusted I,\" which needs a dash\" uses a subject form (I, he, she, we, they) where an object is needed. Drop the other person and try the pronoun alone: you would not say \"asked I\" or \"to I.\""
        ]
      }
    ]
  },
  {
    "id": "who-whom",
    "part": 2,
    "source": "B",
    "title": "Who vs whom",
    "rule": "Who is a relative pronoun which can start either a dependent or independent clause within a sentence. Who is used when the pronoun is the subject doing the action, whereas whom is used when the pronoun is the object of the action. Figuring out whether to use its subject or object form does not depend on its antecedent. Instead, you have to see what role who is playing inside its own clause. One trick is to replace the who or whom with I or me to see whether you need the subject or object form.",
    "trap": "Choosing who or whom based on the noun it refers to, rather than on the pronoun's job inside its own clause.",
    "before": "The essay points out that the reduction in taxes only benefits those people whom understand the tax code.",
    "after": "The essay points out that the reduction in taxes only benefits those people who understand the tax code.",
    "qs": [
      {
        "q": "The essay points out that the reduction in taxes only benefits those people whom understand the tax code. The best revision is",
        "o": [
          "keep \"whom understand\"",
          "The essay points out that the reduction in taxes only benefits those people who understand the tax code.",
          "The essay points out that the reduction in taxes only benefits those people whom understands the tax code.",
          "The essay points out that the reduction in taxes only benefits those people which understand the tax code."
        ],
        "a": 1,
        "why": "Inside the clause, the pronoun is the subject of \"understand,\" so \"who\" is correct. \"Me understand the tax code\" does not work; \"I understand\" does.",
        "wx": [
          "\"Whom\" is the object form. In this clause the pronoun is the subject doing the action, so \"who\" is required. A trick: if \"I\" would fit, use \"who.\"",
          "",
          "\"Whom\" is the object form. In this clause the pronoun is the subject doing the action, so \"who\" is required. A trick: if \"I\" would fit, use \"who.\"",
          "\"which\" is not the right who/whom form. Look at the pronoun's job inside its own clause."
        ]
      },
      {
        "q": "Skydivers, who many people greatly admire, tend to be comfortable with risk-taking and in excellent physical shape. The best revision is",
        "o": [
          "keep \"who many people greatly admire\"",
          "Skydivers, whom many people greatly admire, tend to be comfortable with risk-taking and in excellent physical shape.",
          "Skydivers, who many people greatly admires, tend to be comfortable with risk-taking and in excellent physical shape.",
          "Skydivers whom, many people greatly admire tend to be comfortable with risk-taking and in excellent physical shape."
        ],
        "a": 1,
        "why": "Even though \"skydivers\" is the subject of the sentence, inside the clause the pronoun is the object of \"admire,\" so use \"whom.\" \"Many people greatly admire me\" works; \"admire I\" does not.",
        "wx": [
          "\"Who\" is the subject form. In this clause the pronoun is the object of the action, so \"whom\" is required. A trick: if \"me\" would fit, use \"whom.\"",
          "",
          "\"Who\" is the subject form. In this clause the pronoun is the object of the action, so \"whom\" is required. A trick: if \"me\" would fit, use \"whom.\"",
          "The who/whom form is not the problem here; this version is worded or punctuated incorrectly."
        ]
      },
      {
        "q": "The scientist ___ the committee selected will lead the study.",
        "o": [
          "who",
          "whom",
          "which",
          "whoever"
        ],
        "a": 1,
        "why": "The committee selected the scientist: the pronoun is the object of \"selected,\" so \"whom\" is correct.",
        "wx": [
          "\"Who\" is the subject form. In this clause the pronoun is the object of the action, so \"whom\" is required. A trick: if \"me\" would fit, use \"whom.\"",
          "",
          "\"which\" is not the right who/whom form. Look at the pronoun's job inside its own clause.",
          "\"whoever\" is not the right who/whom form. Look at the pronoun's job inside its own clause."
        ]
      },
      {
        "q": "The violinist ___ won the contest is only fifteen.",
        "o": [
          "whom",
          "who",
          "which",
          "whomever"
        ],
        "a": 1,
        "why": "The pronoun is the subject of \"won,\" so use \"who.\"",
        "wx": [
          "\"Whom\" is the object form. In this clause the pronoun is the subject doing the action, so \"who\" is required. A trick: if \"I\" would fit, use \"who.\"",
          "",
          "\"which\" is not the right who/whom form. Look at the pronoun's job inside its own clause.",
          "\"whomever\" is not the right who/whom form. Look at the pronoun's job inside its own clause."
        ]
      },
      {
        "q": "To decide between who and whom, you should",
        "o": [
          "match the number of the antecedent only",
          "see what role the pronoun is playing inside its own clause",
          "always use \"who\" after a comma",
          "always use \"whom\" for people"
        ],
        "a": 1,
        "why": "The official rule is that the choice does not depend on the antecedent; it depends on the pronoun's job in its own clause.",
        "wx": [
          "This version uses the wrong who/whom form, or it punctuates the clause incorrectly. Look at the pronoun's job inside its own clause, not at the noun it refers to.",
          "",
          "This version uses the wrong who/whom form, or it punctuates the clause incorrectly. Look at the pronoun's job inside its own clause, not at the noun it refers to.",
          "This version uses the wrong who/whom form, or it punctuates the clause incorrectly. Look at the pronoun's job inside its own clause, not at the noun it refers to."
        ]
      },
      {
        "q": "A useful trick is to replace who/whom with",
        "o": [
          "he or they only",
          "I or me, to see whether you need the subject or object form",
          "it or its",
          "this or that"
        ],
        "a": 1,
        "why": "That is the official test: \"me understand\" fails, and \"admire I\" fails.",
        "wx": [
          "This version uses the wrong who/whom form, or it punctuates the clause incorrectly. Look at the pronoun's job inside its own clause, not at the noun it refers to.",
          "",
          "This version uses the wrong who/whom form, or it punctuates the clause incorrectly. Look at the pronoun's job inside its own clause, not at the noun it refers to.",
          "\"that\" is not the right who/whom form. Look at the pronoun's job inside its own clause."
        ]
      },
      {
        "q": "The students ___ arrived early helped set up the chairs.",
        "o": [
          "whom",
          "who",
          "which",
          "whomever"
        ],
        "a": 1,
        "why": "The pronoun is the subject of \"arrived,\" so \"who\" is correct.",
        "wx": [
          "\"Whom\" is the object form. In this clause the pronoun is the subject doing the action, so \"who\" is required. A trick: if \"I\" would fit, use \"who.\"",
          "",
          "\"which\" is not the right who/whom form. Look at the pronoun's job inside its own clause.",
          "\"whomever\" is not the right who/whom form. Look at the pronoun's job inside its own clause."
        ]
      },
      {
        "q": "The mentor ___ she trusted most was out of town.",
        "o": [
          "who",
          "whom",
          "which",
          "whoever"
        ],
        "a": 1,
        "why": "She trusted the mentor: the pronoun is the object of \"trusted,\" so \"whom\" is correct.",
        "wx": [
          "\"Who\" is the subject form. In this clause the pronoun is the object of the action, so \"whom\" is required. A trick: if \"me\" would fit, use \"whom.\"",
          "",
          "\"which\" is not the right who/whom form. Look at the pronoun's job inside its own clause.",
          "\"whoever\" is not the right who/whom form. Look at the pronoun's job inside its own clause."
        ]
      },
      {
        "q": "Which sentence uses \"whom\" correctly?",
        "o": [
          "The people whom called were polite.",
          "The people whom we called were polite.",
          "The people whom were calling were polite.",
          "Whom left a message?"
        ],
        "a": 1,
        "why": "In \"whom we called,\" the pronoun is the object of \"called.\" In the other options, the pronoun is a subject and should be \"who.\"",
        "wx": [
          "The who/whom form is not the problem here; this version is worded or punctuated incorrectly.",
          "",
          "The who/whom form is not the problem here; this version is worded or punctuated incorrectly.",
          "The who/whom form is not the problem here; this version is worded or punctuated incorrectly."
        ]
      },
      {
        "q": "Which sentence uses \"who\" correctly?",
        "o": [
          "The guest who we invited sent regrets.",
          "The guest who sent regrets had been invited.",
          "The guest who the host invited sent regrets.",
          "To who was the letter addressed?"
        ],
        "a": 1,
        "why": "In \"who sent regrets,\" the pronoun is the subject of \"sent.\" The other options need \"whom\" because the pronoun is an object.",
        "wx": [
          "This version uses the wrong who/whom form, or it punctuates the clause incorrectly. Look at the pronoun's job inside its own clause, not at the noun it refers to.",
          "",
          "This version uses the wrong who/whom form, or it punctuates the clause incorrectly. Look at the pronoun's job inside its own clause, not at the noun it refers to.",
          "This version uses the wrong who/whom form, or it punctuates the clause incorrectly. Look at the pronoun's job inside its own clause, not at the noun it refers to."
        ]
      },
      {
        "q": "In \"people whom understand the tax code,\" the error is that",
        "o": [
          "\"people\" cannot take a relative clause",
          "inside the clause the pronoun is the subject of \"understand,\" so it should be \"who\"",
          "a semicolon is required",
          "\"tax code\" must be capitalized"
        ],
        "a": 1,
        "why": "Do not choose \"whom\" just because \"people\" is an object of \"benefits.\" Look inside the clause.",
        "wx": [
          "This version uses the wrong who/whom form, or it punctuates the clause incorrectly. Look at the pronoun's job inside its own clause, not at the noun it refers to.",
          "",
          "This version uses the wrong who/whom form, or it punctuates the clause incorrectly. Look at the pronoun's job inside its own clause, not at the noun it refers to.",
          "This version uses the wrong who/whom form, or it punctuates the clause incorrectly. Look at the pronoun's job inside its own clause, not at the noun it refers to."
        ]
      },
      {
        "q": "In \"skydivers, who many people greatly admire,\" the error is that",
        "o": [
          "\"skydivers\" is plural",
          "inside the clause the pronoun is the object of \"admire,\" so it should be \"whom\"",
          "the commas should be removed",
          "\"admire\" should be \"admires\""
        ],
        "a": 1,
        "why": "The antecedent being the subject of the whole sentence does not decide the form. The pronoun is an object inside its clause.",
        "wx": [
          "This version uses the wrong who/whom form, or it punctuates the clause incorrectly. Look at the pronoun's job inside its own clause, not at the noun it refers to.",
          "",
          "This version uses the wrong who/whom form, or it punctuates the clause incorrectly. Look at the pronoun's job inside its own clause, not at the noun it refers to.",
          "This version uses the wrong who/whom form, or it punctuates the clause incorrectly. Look at the pronoun's job inside its own clause, not at the noun it refers to."
        ]
      }
    ],
    "bank": [
      {
        "q": "The artist ___ painted this mural trained in Mexico.",
        "o": [
          "whom",
          "who",
          "which",
          "whomever"
        ],
        "a": 1,
        "why": "The pronoun is the subject of \"painted,\" so \"who.\"",
        "wx": [
          "\"Whom\" is the object form. In this clause the pronoun is the subject doing the action, so \"who\" is required. A trick: if \"I\" would fit, use \"who.\"",
          "",
          "\"which\" is not the right who/whom form. Look at the pronoun's job inside its own clause.",
          "\"whomever\" is not the right who/whom form. Look at the pronoun's job inside its own clause."
        ]
      },
      {
        "q": "The candidate ___ the voters elected promised reform.",
        "o": [
          "who",
          "whom",
          "which",
          "whoever"
        ],
        "a": 1,
        "why": "The voters elected the candidate: object form \"whom.\"",
        "wx": [
          "\"Who\" is the subject form. In this clause the pronoun is the object of the action, so \"whom\" is required. A trick: if \"me\" would fit, use \"whom.\"",
          "",
          "\"which\" is not the right who/whom form. Look at the pronoun's job inside its own clause.",
          "\"whoever\" is not the right who/whom form. Look at the pronoun's job inside its own clause."
        ]
      },
      {
        "q": "\"Many people greatly admire I\" is a clue that the relative pronoun should be",
        "o": [
          "who",
          "whom",
          "which",
          "whose"
        ],
        "a": 1,
        "why": "If \"me\" would fit (\"admire me\"), the object form \"whom\" is required.",
        "wx": [
          "\"Who\" is the subject form. In this clause the pronoun is the object of the action, so \"whom\" is required. A trick: if \"me\" would fit, use \"whom.\"",
          "",
          "\"which\" is not the right who/whom form. Look at the pronoun's job inside its own clause.",
          "\"whose\" is not the right who/whom form for the pronoun's job in its own clause."
        ]
      },
      {
        "q": "\"Me understand the tax code\" is a clue that the relative pronoun should be",
        "o": [
          "whom",
          "who",
          "which",
          "whomever"
        ],
        "a": 1,
        "why": "If \"I\" would fit (\"I understand\"), the subject form \"who\" is required.",
        "wx": [
          "\"Whom\" is the object form. In this clause the pronoun is the subject doing the action, so \"who\" is required. A trick: if \"I\" would fit, use \"who.\"",
          "",
          "\"which\" is not the right who/whom form. Look at the pronoun's job inside its own clause.",
          "\"whomever\" is not the right who/whom form. Look at the pronoun's job inside its own clause."
        ]
      },
      {
        "q": "Which neighbors sentence is correct?",
        "o": [
          "The neighbors, who we thanked, brought soup.",
          "The neighbors, whom we thanked, brought soup.",
          "The neighbors, whom brought soup, we thanked.",
          "The neighbors whom, we thanked brought soup."
        ],
        "a": 1,
        "why": "\"We thanked them,\" so \"whom\" is the object in its clause.",
        "wx": [
          "\"Who\" is the subject form. In this clause the pronoun is the object of the action, so \"whom\" is required. A trick: if \"me\" would fit, use \"whom.\"",
          "",
          "The who/whom form is not the problem here; this version is worded or punctuated incorrectly.",
          "The who/whom form is not the problem here; this version is worded or punctuated incorrectly."
        ]
      },
      {
        "q": "The form of who/whom depends on",
        "o": [
          "whether the antecedent is singular or plural",
          "whether the pronoun is the subject or the object inside its own clause",
          "whether the clause has commas",
          "whether the antecedent is a person or a thing"
        ],
        "a": 1,
        "why": "That is the official point of this rule. (Person vs. thing is a different topic.)",
        "wx": [
          "This version uses the wrong who/whom form, or it punctuates the clause incorrectly. Look at the pronoun's job inside its own clause, not at the noun it refers to.",
          "",
          "This version uses the wrong who/whom form, or it punctuates the clause incorrectly. Look at the pronoun's job inside its own clause, not at the noun it refers to.",
          "This version uses the wrong who/whom form, or it punctuates the clause incorrectly. Look at the pronoun's job inside its own clause, not at the noun it refers to."
        ]
      }
    ]
  },
  {
    "id": "pref",
    "part": 2,
    "source": "B",
    "title": "Pronouns and antecedents",
    "rule": "If there is a pronoun, it should be obvious what noun the pronoun is referring back to. If it is unclear which noun a pronoun is referring to, or if a pronoun has no antecedent, the sentence needs to be rewritten in one of two ways: either the pronoun can be replaced with a noun, or the phrase can be simplified.",
    "trap": "Leaving a pronoun such as \"this,\" \"them,\" or \"it\" when more than one noun could be the antecedent, or when no noun has been named at all.",
    "before": "The files arranged by the temporary workers were out of order, so management sent them back to the main office.",
    "after": "The files arranged by the temporary workers were out of order, so management sent the files back to the main office.",
    "qs": [
      {
        "q": "The files arranged by the temporary workers were out of order, so management sent them back to the main office. The problem with \"them\" is that",
        "o": [
          "\"them\" is always wrong",
          "it is unclear whether \"them\" refers to the files or the temporary workers",
          "the verb \"sent\" should be \"send\"",
          "a semicolon is required"
        ],
        "a": 1,
        "why": "Two plural nouns come before \"them.\" The official fix names the noun: \"sent the files back.\"",
        "wx": [
          "\"\"them\" is always wrong\" is not the real problem here. The issue is that the pronoun is unclear or has no noun to refer back to.",
          "",
          "\"the verb \"sent\" should be \"send\"\" is not the real problem here. The issue is that the pronoun is unclear or has no noun to refer back to.",
          "\"a semicolon is required\" is not the real problem here. The issue is that the pronoun is unclear or has no noun to refer back to."
        ]
      },
      {
        "q": "The best revision of that files sentence is",
        "o": [
          "so management sent them back to the main office",
          "so management sent the files back to the main office",
          "so management sent they back to the main office",
          "so management sent them, back to the main office"
        ],
        "a": 1,
        "why": "Replacing the unclear pronoun with the noun \"the files\" removes the ambiguity.",
        "wx": [
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "",
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase."
        ]
      },
      {
        "q": "During the Industrial Revolution in England, a resistance group sprang up to protest the mechanization of the labor force. Workers associated with this began to break and burn factory machinery. \"This\" is unclear because",
        "o": [
          "\"this\" can never begin a phrase",
          "it could refer to more than one earlier noun, such as the resistance group, the mechanization, or the labor force",
          "the paragraph is too short",
          "Industrial Revolution must be lowercase"
        ],
        "a": 1,
        "why": "The official fix adds a noun: \"this faction.\"",
        "wx": [
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "",
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "\"Industrial Revolution must be lowercase\" is not the real problem here. The issue is that the pronoun is unclear or has no noun to refer back to."
        ]
      },
      {
        "q": "A clear revision of \"Workers associated with this began to break...\" is",
        "o": [
          "Workers associated with this began to break and burn factory machinery.",
          "Workers associated with this faction began to break and burn factory machinery.",
          "Workers associated with these began to break and burn factory machinery.",
          "Workers associated with this, began to break and burn factory machinery."
        ],
        "a": 1,
        "why": "Adding the noun \"faction\" makes the antecedent obvious.",
        "wx": [
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "",
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase."
        ]
      },
      {
        "q": "The amount of entertainment available is increasing steadily; soon there will be more than 5,000 shows for them to distribute to subscribers. The error is that",
        "o": [
          "\"them\" disagrees in number",
          "\"them\" has no antecedent — no group has been named to distribute the shows",
          "a colon is required after \"steadily\"",
          "\"shows\" should be \"show\""
        ],
        "a": 1,
        "why": "The official repair simplifies the phrase: \"more than 5,000 shows for distribution to subscribers.\"",
        "wx": [
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "",
          "\"a colon is required after \"steadily\"\" is not the real problem here. The issue is that the pronoun is unclear or has no noun to refer back to.",
          "\"\"shows\" should be \"show\"\" is not the real problem here. The issue is that the pronoun is unclear or has no noun to refer back to."
        ]
      },
      {
        "q": "A correct revision of the entertainment sentence is",
        "o": [
          "soon there will be more than 5,000 shows for them to distribute to subscribers",
          "soon there will be more than 5,000 shows for distribution to subscribers",
          "soon there will be more than 5,000 shows for they to distribute to subscribers",
          "soon there will be more than 5,000 shows, for them, to distribute to subscribers"
        ],
        "a": 1,
        "why": "When a pronoun has no antecedent, simplify the phrase instead of keeping \"them.\"",
        "wx": [
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "",
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase."
        ]
      },
      {
        "q": "If a pronoun’s antecedent is unclear, you can repair the sentence by",
        "o": [
          "deleting all nouns",
          "replacing the pronoun with a noun, or simplifying the phrase",
          "changing the pronoun to \"it\" always",
          "adding a semicolon before the pronoun"
        ],
        "a": 1,
        "why": "Those are the two official repairs.",
        "wx": [
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "",
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "\"adding a semicolon before the pronoun\" is not the real problem here. The issue is that the pronoun is unclear or has no noun to refer back to."
        ]
      },
      {
        "q": "After the researchers met the farmers, they shared soil samples. The clearest revision is",
        "o": [
          "After the researchers met the farmers, they shared soil samples.",
          "After the researchers met the farmers, the farmers shared soil samples.",
          "After the researchers met the farmers, them shared soil samples.",
          "After the researchers met the farmers they, shared soil samples."
        ],
        "a": 1,
        "why": "\"They\" could mean either group. Naming the intended noun removes the ambiguity.",
        "wx": [
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "",
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase."
        ]
      },
      {
        "q": "When Maya handed the letter to Priya, she smiled. A clearer version is",
        "o": [
          "When Maya handed the letter to Priya, she smiled.",
          "When Maya handed the letter to Priya, Priya smiled.",
          "When Maya handed the letter to Priya, she, smiled.",
          "When Maya handed the letter to Priya she smiled it."
        ],
        "a": 1,
        "why": "\"She\" could be Maya or Priya. Replace the pronoun with the intended name.",
        "wx": [
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "",
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase."
        ]
      },
      {
        "q": "The board discussed the proposal until midnight, and then it was tabled. The clearest revision is",
        "o": [
          "and then it was tabled",
          "and then the proposal was tabled",
          "and then they was tabled",
          "and then it, was tabled"
        ],
        "a": 1,
        "why": "\"It\" could be heard as the board or the proposal. Naming \"the proposal\" makes the antecedent obvious.",
        "wx": [
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "",
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase."
        ]
      },
      {
        "q": "A pronoun with no antecedent should be repaired by",
        "o": [
          "adding \"they\" twice",
          "simplifying the phrase or naming the missing noun",
          "changing the period to a comma",
          "using \"this\" instead"
        ],
        "a": 1,
        "why": "The official entertainment example has no noun for \"them,\" so the phrase is simplified.",
        "wx": [
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "",
          "\"changing the period to a comma\" is not the real problem here. The issue is that the pronoun is unclear or has no noun to refer back to.",
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase."
        ]
      },
      {
        "q": "Which sentence already has a clear antecedent?",
        "o": [
          "When the nurses met the patients, they were anxious.",
          "When the nurses met the patients, the patients were anxious.",
          "When the nurses met the patients, they, were anxious.",
          "When the nurses met the patients they were anxious about it."
        ],
        "a": 1,
        "why": "Naming \"the patients\" makes it obvious who was anxious.",
        "wx": [
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "",
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase."
        ]
      }
    ],
    "bank": [
      {
        "q": "If two nouns could be the antecedent, the official repair is to",
        "o": [
          "delete the verb",
          "replace the pronoun with the intended noun",
          "use \"this\" instead of \"them\"",
          "add a dash after the pronoun"
        ],
        "a": 1,
        "why": "That is the first official repair.",
        "wx": [
          "\"delete the verb\" is not the real problem here. The issue is that the pronoun is unclear or has no noun to refer back to.",
          "",
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "\"add a dash after the pronoun\" is not the real problem here. The issue is that the pronoun is unclear or has no noun to refer back to."
        ]
      },
      {
        "q": "In \"management sent them back,\" \"them\" is a problem because",
        "o": [
          "\"them\" is not a pronoun",
          "either the files or the temporary workers could be \"them\"",
          "\"management\" is plural",
          "the sentence is a fragment"
        ],
        "a": 1,
        "why": "The official example is repaired by writing \"the files.\"",
        "wx": [
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "",
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "\"the sentence is a fragment\" is not the real problem here. The issue is that the pronoun is unclear or has no noun to refer back to."
        ]
      },
      {
        "q": "Choose the clearer sentence.",
        "o": [
          "After Luca called Jordan, he apologized.",
          "After Luca called Jordan, Luca apologized.",
          "After Luca called Jordan, he, apologized.",
          "After Luca called Jordan he apologized then."
        ],
        "a": 1,
        "why": "Replacing \"he\" with \"Luca\" (or \"Jordan,\" if that is the intended meaning) removes the ambiguity.",
        "wx": [
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "",
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase."
        ]
      },
      {
        "q": "The official repair when a pronoun has no noun to refer back to is to",
        "o": [
          "leave the pronoun",
          "simplify the phrase or add the missing noun",
          "pluralize the verb",
          "add \"however\""
        ],
        "a": 1,
        "why": "That is the second official repair, used in the \"for them to distribute\" example.",
        "wx": [
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "",
          "\"pluralize the verb\" is not the real problem here. The issue is that the pronoun is unclear or has no noun to refer back to.",
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase."
        ]
      },
      {
        "q": "Workers associated with this began to protest. The word to add after \"this\" in the official example is",
        "o": [
          "one",
          "faction",
          "them",
          "it"
        ],
        "a": 1,
        "why": "The official fix is \"this faction.\"",
        "wx": [
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "",
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase."
        ]
      },
      {
        "q": "Which revision is clearer?",
        "o": [
          "The interns labeled the boxes, and then they were shipped.",
          "The interns labeled the boxes, and then the boxes were shipped.",
          "The interns labeled the boxes, and then they, were shipped.",
          "The interns labeled the boxes and then they shipped them out it."
        ],
        "a": 1,
        "why": "\"They\" could mean the interns or the boxes. Naming \"the boxes\" makes the meaning obvious.",
        "wx": [
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "",
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase.",
          "This wording still leaves the pronoun unclear, or it still has no noun for the pronoun to refer back to. Name the intended noun, or simplify the phrase."
        ]
      }
    ]
  },
  {
    "id": "relpro",
    "part": 2,
    "source": "B",
    "title": "That vs who",
    "rule": "The basic concept behind these relative pronouns is simple: who is the pronoun for a person or people, and that is the pronoun for everything else. Use who for a person; use that for things, groups, and organizations.",
    "trap": "Writing \"people that\" or \"the scientist that,\" or using \"who\" for a group, organization, or thing, such as \"the scientific establishment who.\"",
    "before": "Coaching can be difficult for people that have a hard time planning strategy on the field.",
    "after": "Coaching can be difficult for people who have a hard time planning strategy on the field.",
    "qs": [
      {
        "q": "Coaching can be difficult for people that have a hard time planning strategy on the field. The best revision is",
        "o": [
          "keep \"people that\"",
          "Coaching can be difficult for people who have a hard time planning strategy on the field.",
          "Coaching can be difficult for people which have a hard time planning strategy on the field.",
          "Coaching can be difficult for people whom have a hard time planning strategy on the field."
        ],
        "a": 1,
        "why": "People are persons, so the official pronoun is \"who,\" not \"that.\"",
        "wx": [
          "\"That\" is for things, groups, and organizations, not for a person. Use \"who\" for a person or people.",
          "",
          "\"which\" is for things, groups, and organizations, not for a person. Use \"who\" for a person or people.",
          "The noun is a person, so \"who\" is the official pronoun here (this question is about person vs. thing, not subject vs. object)."
        ]
      },
      {
        "q": "The scientific establishment who rejected Giordano Bruno’s theory that the earth revolves around the sun later had to acknowledge its mistake. The best revision is",
        "o": [
          "keep \"establishment who\"",
          "The scientific establishment that rejected Giordano Bruno’s theory that the earth revolves around the sun later had to acknowledge its mistake.",
          "The scientific establishment whom rejected Giordano Bruno’s theory that the earth revolves around the sun later had to acknowledge its mistake.",
          "The scientific establishment who, rejected Giordano Bruno’s theory that the earth revolves around the sun later had to acknowledge its mistake."
        ],
        "a": 1,
        "why": "An establishment is an organization, not a person, so use \"that,\" not \"who.\"",
        "wx": [
          "\"Who\" is for a person or people. The noun here is a thing, group, or organization, so use \"that.\"",
          "",
          "\"whom\" is for a person or people. The noun here is a thing, group, or organization, so use \"that.\"",
          "\"who\" is for a person or people. The noun here is a thing, group, or organization, so use \"that.\""
        ]
      },
      {
        "q": "The decision was made by the director, wanting to organize the group in a more efficient way. The best revision is",
        "o": [
          "The decision was made by the director, wanting to organize the group in a more efficient way.",
          "The decision was made by the director, who wanted to organize the group in a more efficient way.",
          "The decision was made by the director, that wanted to organize the group in a more efficient way.",
          "The decision was made by the director which wanted to organize the group in a more efficient way."
        ],
        "a": 1,
        "why": "The official repair uses \"who wanted,\" because the director is a person.",
        "wx": [
          "This version uses the wrong relative pronoun. Use \"who\" for a person or people, and \"that\" for a thing, group, or organization.",
          "",
          "\"that\" is for things, groups, and organizations, not for a person. Use \"who\" for a person or people.",
          "\"which\" is for things, groups, and organizations, not for a person. Use \"who\" for a person or people."
        ]
      },
      {
        "q": "The violinist ___ won the contest is only fifteen. Because a violinist is a person, choose",
        "o": [
          "which",
          "who",
          "that",
          "those"
        ],
        "a": 1,
        "why": "A violinist is a person, so \"who\" is the official choice.",
        "wx": [
          "\"which\" is for things, groups, and organizations, not for a person. Use \"who\" for a person or people.",
          "",
          "\"that\" is for things, groups, and organizations, not for a person. Use \"who\" for a person or people.",
          "\"those\" is for a thing or group, not a person. Use \"who\" for a person."
        ]
      },
      {
        "q": "The bridge ___ crosses the river was repaired last year.",
        "o": [
          "who",
          "that",
          "whom",
          "whoever"
        ],
        "a": 1,
        "why": "A bridge is a thing, so use \"that.\"",
        "wx": [
          "\"who\" is for a person or people. The noun here is a thing, group, or organization, so use \"that.\"",
          "",
          "\"whom\" is for a person or people. The noun here is a thing, group, or organization, so use \"that.\"",
          "\"whoever\" is for a person. The noun here is a thing, group, or organization, so use \"that.\""
        ]
      },
      {
        "q": "Who is the pronoun for",
        "o": [
          "organizations only",
          "a person or people",
          "things and places only",
          "animals only"
        ],
        "a": 1,
        "why": "That is the official rule: who is for a person or people.",
        "wx": [
          "This version uses the wrong relative pronoun. Use \"who\" for a person or people, and \"that\" for a thing, group, or organization.",
          "",
          "This version uses the wrong relative pronoun. Use \"who\" for a person or people, and \"that\" for a thing, group, or organization.",
          "This version uses the wrong relative pronoun. Use \"who\" for a person or people, and \"that\" for a thing, group, or organization."
        ]
      },
      {
        "q": "That is the pronoun for",
        "o": [
          "people only",
          "everything else — things, groups, and organizations",
          "subjects only",
          "possessives only"
        ],
        "a": 1,
        "why": "The official rule is that \"that\" is for everything that is not a person.",
        "wx": [
          "This version uses the wrong relative pronoun. Use \"who\" for a person or people, and \"that\" for a thing, group, or organization.",
          "",
          "This version uses the wrong relative pronoun. Use \"who\" for a person or people, and \"that\" for a thing, group, or organization.",
          "This version uses the wrong relative pronoun. Use \"who\" for a person or people, and \"that\" for a thing, group, or organization."
        ]
      },
      {
        "q": "Which sentence about the engineers is correct?",
        "o": [
          "The engineers that designed the dam retired.",
          "The engineers who designed the dam retired.",
          "The engineers which designed the dam retired.",
          "The engineers who, designed the dam retired."
        ],
        "a": 1,
        "why": "Engineers are people, so use \"who.\"",
        "wx": [
          "\"that\" is for things, groups, and organizations, not for a person. Use \"who\" for a person or people.",
          "",
          "\"which\" is for things, groups, and organizations, not for a person. Use \"who\" for a person or people.",
          "This version uses the wrong relative pronoun. Use \"who\" for a person or people, and \"that\" for a thing, group, or organization."
        ]
      },
      {
        "q": "Which sentence about a company is correct?",
        "o": [
          "The company who issued the recall apologized.",
          "The company that issued the recall apologized.",
          "The company whom issued the recall apologized.",
          "The company who, issued the recall apologized."
        ],
        "a": 1,
        "why": "A company is an organization, so use \"that,\" not \"who.\"",
        "wx": [
          "\"who\" is for a person or people. The noun here is a thing, group, or organization, so use \"that.\"",
          "",
          "\"whom\" is for a person or people. The noun here is a thing, group, or organization, so use \"that.\"",
          "\"who\" is for a person or people. The noun here is a thing, group, or organization, so use \"that.\""
        ]
      },
      {
        "q": "The museum ___ houses the collection closes on Mondays.",
        "o": [
          "who",
          "that",
          "whom",
          "whoever"
        ],
        "a": 1,
        "why": "A museum is a thing or institution, so \"that\" is correct.",
        "wx": [
          "\"who\" is for a person or people. The noun here is a thing, group, or organization, so use \"that.\"",
          "",
          "\"whom\" is for a person or people. The noun here is a thing, group, or organization, so use \"that.\"",
          "\"whoever\" is for a person. The noun here is a thing, group, or organization, so use \"that.\""
        ]
      },
      {
        "q": "The neighbor ___ waters our plants is away this week.",
        "o": [
          "that",
          "who",
          "which",
          "those"
        ],
        "a": 1,
        "why": "A neighbor is a person, so use \"who.\"",
        "wx": [
          "\"that\" is for things, groups, and organizations, not for a person. Use \"who\" for a person or people.",
          "",
          "\"which\" is for things, groups, and organizations, not for a person. Use \"who\" for a person or people.",
          "\"those\" is for a thing or group, not a person. Use \"who\" for a person."
        ]
      },
      {
        "q": "The team of researchers ___ published the study works in Boston. Because \"team\" is a group, the official choice is",
        "o": [
          "who",
          "that",
          "whom",
          "whoever"
        ],
        "a": 1,
        "why": "A team is a group, not a person, so use \"that.\" Do not choose \"who\" just because researchers are people; the noun being modified is \"team.\"",
        "wx": [
          "\"who\" is for a person or people. The noun here is a thing, group, or organization, so use \"that.\"",
          "",
          "\"whom\" is for a person or people. The noun here is a thing, group, or organization, so use \"that.\"",
          "\"whoever\" is for a person. The noun here is a thing, group, or organization, so use \"that.\""
        ]
      }
    ],
    "bank": [
      {
        "q": "People ___ plan ahead usually finish on time.",
        "o": [
          "that",
          "who",
          "which",
          "those"
        ],
        "a": 1,
        "why": "\"People\" takes \"who.\"",
        "wx": [
          "\"that\" is for things, groups, and organizations, not for a person. Use \"who\" for a person or people.",
          "",
          "\"which\" is for things, groups, and organizations, not for a person. Use \"who\" for a person or people.",
          "\"those\" is for a thing or group, not a person. Use \"who\" for a person."
        ]
      },
      {
        "q": "The statute ___ banned the practice was later repealed.",
        "o": [
          "who",
          "that",
          "whom",
          "whoever"
        ],
        "a": 1,
        "why": "A statute is a thing, so \"that.\"",
        "wx": [
          "\"who\" is for a person or people. The noun here is a thing, group, or organization, so use \"that.\"",
          "",
          "\"whom\" is for a person or people. The noun here is a thing, group, or organization, so use \"that.\"",
          "\"whoever\" is for a person. The noun here is a thing, group, or organization, so use \"that.\""
        ]
      },
      {
        "q": "The official repair of \"people that have a hard time\" is to change \"that\" to",
        "o": [
          "which",
          "who",
          "whom",
          "those"
        ],
        "a": 1,
        "why": "The official example uses \"people who.\"",
        "wx": [
          "\"which\" is for things, groups, and organizations, not for a person. Use \"who\" for a person or people.",
          "",
          "The noun is a person, so \"who\" is the official pronoun here (this question is about person vs. thing, not subject vs. object).",
          "\"those\" is for a thing or group, not a person. Use \"who\" for a person."
        ]
      },
      {
        "q": "The official repair of \"the scientific establishment who rejected\" is to change \"who\" to",
        "o": [
          "whom",
          "that",
          "which",
          "whoever"
        ],
        "a": 1,
        "why": "An establishment is not a person, so use \"that.\"",
        "wx": [
          "\"whom\" is for a person or people. The noun here is a thing, group, or organization, so use \"that.\"",
          "",
          "\"Which\" is not the official choice here. Use \"who\" for a person, and \"that\" for a thing, group, or organization.",
          "\"whoever\" is for a person. The noun here is a thing, group, or organization, so use \"that.\""
        ]
      },
      {
        "q": "Which sentence about the singer is correct?",
        "o": [
          "The singer that wrote the hymn was praised.",
          "The singer who wrote the hymn was praised.",
          "The singer which wrote the hymn was praised.",
          "The singer that, wrote the hymn was praised."
        ],
        "a": 1,
        "why": "A singer is a person, so \"who.\"",
        "wx": [
          "\"that\" is for things, groups, and organizations, not for a person. Use \"who\" for a person or people.",
          "",
          "\"which\" is for things, groups, and organizations, not for a person. Use \"who\" for a person or people.",
          "\"that\" is for things, groups, and organizations, not for a person. Use \"who\" for a person or people."
        ]
      },
      {
        "q": "Use \"who\" when the noun is a person, and use \"that\" when the noun is",
        "o": [
          "also a person",
          "everything else, including things, groups, and organizations",
          "only a place name",
          "only a plural noun"
        ],
        "a": 1,
        "why": "That is the official basic concept.",
        "wx": [
          "This version uses the wrong relative pronoun. Use \"who\" for a person or people, and \"that\" for a thing, group, or organization.",
          "",
          "This version uses the wrong relative pronoun. Use \"who\" for a person or people, and \"that\" for a thing, group, or organization.",
          "This version uses the wrong relative pronoun. Use \"who\" for a person or people, and \"that\" for a thing, group, or organization."
        ]
      }
    ]
  },
  {
    "id": "indef",
    "part": 2,
    "source": "B",
    "title": "Indefinite pronouns",
    "rule": "Indefinite pronouns refer to a person, place, or thing that is unknown or unspecified. Many indefinite pronouns that seem like they are referring to multiple things or people are actually singular. This means that they use singular forms of verbs: everyone is instead of everyone are. This also means that any nouns that refer to them also have to be singular and not plural: no one wants to be a dropout instead of no one wants to be dropouts. Words such as everyone, everybody, everything, someone, anybody, no one, each, either, and neither are singular.",
    "trap": "Letting a plural noun in an \"of\" phrase (\"each of the actors\") pull the verb or a later noun into the plural.",
    "before": "On big-budget movies, each of the actors have large, well-decorated trailers.",
    "after": "On big-budget movies, each of the actors has a large, well-decorated trailer.",
    "qs": [
      {
        "q": "On big-budget movies, each of the actors have large, well-decorated trailers. The best revision is",
        "o": [
          "On big-budget movies, each of the actors have large, well-decorated trailers.",
          "On big-budget movies, each of the actors has a large, well-decorated trailer.",
          "On big-budget movies, each of the actors have a large, well-decorated trailer.",
          "On big-budget movies, each of the actors has large, well-decorated trailers."
        ],
        "a": 1,
        "why": "\"Each\" is singular, so the verb is \"has\" and the matching noun is singular: \"a large, well-decorated trailer.\" Do not let \"actors\" make the sentence plural.",
        "wx": [
          "\"On big-budget movies, each of the actors have large, well-decorated trailers.\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "",
          "\"On big-budget movies, each of the actors have a large, well-decorated trailer.\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "\"On big-budget movies, each of the actors has large, well-decorated trailers.\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too."
        ]
      },
      {
        "q": "Every one of the experts invited to speak at the conference were unable to make it. The best revision is",
        "o": [
          "Every one of the experts invited to speak at the conference were unable to make it.",
          "Every one of the experts invited to speak at the conference was unable to make it.",
          "Every one of the experts invited to speak at the conference were unable to make them.",
          "Every one of the experts invited to speak at the conference was unable to make them."
        ],
        "a": 1,
        "why": "\"Every one\" is singular, so the verb is \"was.\" \"Experts\" in the prepositional phrase does not change that.",
        "wx": [
          "\"Every one of the experts invited to speak at the conference were unable to make it.\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "",
          "\"Every one of the experts invited to speak at the conference were unable to make them.\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "\"Every one of the experts invited to speak at the conference was unable to make them.\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too."
        ]
      },
      {
        "q": "Anyone thinking about becoming writers must be excellent readers. The best revision is",
        "o": [
          "Anyone thinking about becoming writers must be excellent readers.",
          "Anyone thinking about becoming a writer must be an excellent reader.",
          "Anyone thinking about becoming writers must be an excellent reader.",
          "Anyone thinking about becoming a writer must be excellent readers."
        ],
        "a": 1,
        "why": "Nouns that refer back to the singular pronoun \"anyone\" must also be singular: \"a writer\" and \"an excellent reader.\"",
        "wx": [
          "\"Anyone thinking about becoming writers must be excellent readers.\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "",
          "\"Anyone thinking about becoming writers must be an excellent reader.\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "\"Anyone thinking about becoming a writer must be excellent readers.\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too."
        ]
      },
      {
        "q": "Either of these desks would be great surfaces to work on. The best revision is",
        "o": [
          "Either of these desks would be great surfaces to work on.",
          "Either of these desks would be a great surface to work on.",
          "Either of these desks would be great surface to work on.",
          "Either of these desks would be a great surfaces to work on."
        ],
        "a": 1,
        "why": "\"Either\" is singular, so the noun that refers to it is singular: \"a great surface.\"",
        "wx": [
          "\"Either of these desks would be great surfaces to work on.\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "",
          "This version does not stay singular to match the indefinite pronoun (everyone, each, either, neither, someone, anyone, no one, everything).",
          "\"Either of these desks would be a great surfaces to work on.\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too."
        ]
      },
      {
        "q": "Everyone in the two rooms ___ ready.",
        "o": [
          "are",
          "is",
          "were",
          "have been"
        ],
        "a": 1,
        "why": "\"Everyone\" takes a singular verb: \"is.\"",
        "wx": [
          "\"are\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "",
          "\"were\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "\"have been\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too."
        ]
      },
      {
        "q": "Neither of the windows ___ open.",
        "o": [
          "are",
          "is",
          "were",
          "have"
        ],
        "a": 1,
        "why": "\"Neither\" is singular, so use \"is.\" Do not let \"windows\" pull the verb into the plural.",
        "wx": [
          "\"are\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "",
          "\"were\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "\"have\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too."
        ]
      },
      {
        "q": "Somebody left ___ on the bus.",
        "o": [
          "their notebooks",
          "a notebook",
          "some notebooks they had",
          "these notebooks"
        ],
        "a": 1,
        "why": "A singular match is required: \"a notebook\" agrees with singular \"somebody.\"",
        "wx": [
          "\"their notebooks\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "",
          "\"some notebooks they had\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "\"these notebooks\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too."
        ]
      },
      {
        "q": "Each of the samples ___ labeled.",
        "o": [
          "were",
          "was",
          "are",
          "have been"
        ],
        "a": 1,
        "why": "\"Each\" is singular, so \"was\" agrees.",
        "wx": [
          "\"were\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "",
          "\"are\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "\"have been\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too."
        ]
      },
      {
        "q": "No one in the class wants to be ___.",
        "o": [
          "dropouts",
          "a dropout",
          "they",
          "them"
        ],
        "a": 1,
        "why": "The official point: nouns that refer to a singular indefinite pronoun must also be singular.",
        "wx": [
          "\"dropouts\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "",
          "\"they\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "\"them\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too."
        ]
      },
      {
        "q": "Which sentence about tickets is correct?",
        "o": [
          "Everybody on the lists have a ticket.",
          "Everybody on the lists has a ticket.",
          "Everybody on the lists have tickets.",
          "Everybody on the lists has tickets and they are late."
        ],
        "a": 1,
        "why": "\"Everybody\" is singular, so \"has a ticket.\"",
        "wx": [
          "\"Everybody on the lists have a ticket.\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "",
          "\"Everybody on the lists have tickets.\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "\"Everybody on the lists has tickets and they are late.\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too."
        ]
      },
      {
        "q": "Many indefinite pronouns that seem to refer to multiple people are actually",
        "o": [
          "plural",
          "singular",
          "adjectives",
          "prepositions"
        ],
        "a": 1,
        "why": "That is the official warning: everyone, each, either, and neither take singular verbs and singular nouns.",
        "wx": [
          "This version does not stay singular to match the indefinite pronoun (everyone, each, either, neither, someone, anyone, no one, everything).",
          "",
          "This version does not stay singular to match the indefinite pronoun (everyone, each, either, neither, someone, anyone, no one, everything).",
          "This version does not stay singular to match the indefinite pronoun (everyone, each, either, neither, someone, anyone, no one, everything)."
        ]
      },
      {
        "q": "The error in \"each of the actors have large trailers\" is that",
        "o": [
          "\"actors\" cannot be the object of \"of\"",
          "\"each\" is singular, so it needs a singular verb and a singular noun (\"has a trailer\")",
          "a colon is required after \"movies\"",
          "\"trailers\" must be possessive"
        ],
        "a": 1,
        "why": "A plural noun in the \"of\" phrase does not make \"each\" plural.",
        "wx": [
          "This version does not stay singular to match the indefinite pronoun (everyone, each, either, neither, someone, anyone, no one, everything).",
          "",
          "This version does not stay singular to match the indefinite pronoun (everyone, each, either, neither, someone, anyone, no one, everything).",
          "\"\"trailers\" must be possessive\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too."
        ]
      }
    ],
    "bank": [
      {
        "q": "Someone in the offices ___ calling.",
        "o": [
          "are",
          "is",
          "were",
          "have been"
        ],
        "a": 1,
        "why": "\"Someone\" takes a singular verb.",
        "wx": [
          "\"are\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "",
          "\"were\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "\"have been\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too."
        ]
      },
      {
        "q": "Neither of the answers ___ correct.",
        "o": [
          "are",
          "is",
          "were",
          "have been"
        ],
        "a": 1,
        "why": "\"Neither\" is singular, so \"is.\"",
        "wx": [
          "\"are\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "",
          "\"were\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "\"have been\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too."
        ]
      },
      {
        "q": "Anyone hoping to become ___ should practice daily.",
        "o": [
          "musicians",
          "a musician",
          "them",
          "those musicians"
        ],
        "a": 1,
        "why": "The noun that refers to \"anyone\" must be singular.",
        "wx": [
          "\"musicians\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "",
          "\"them\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "\"those musicians\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too."
        ]
      },
      {
        "q": "Each of the doors ___ a new lock.",
        "o": [
          "need",
          "needs",
          "are needing",
          "have needed"
        ],
        "a": 1,
        "why": "\"Each\" takes \"needs.\"",
        "wx": [
          "\"need\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "",
          "\"are needing\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "\"have needed\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too."
        ]
      },
      {
        "q": "Everything on the shelves ___ dusty.",
        "o": [
          "are",
          "is",
          "were",
          "have been"
        ],
        "a": 1,
        "why": "\"Everything\" is singular, so \"is.\"",
        "wx": [
          "\"are\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "",
          "\"were\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "\"have been\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too."
        ]
      },
      {
        "q": "Either of the routes ___ safe in good weather.",
        "o": [
          "are",
          "is",
          "were",
          "have been"
        ],
        "a": 1,
        "why": "\"Either\" is singular, so \"is.\"",
        "wx": [
          "\"are\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "",
          "\"were\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too.",
          "\"have been\" uses a plural verb or a plural noun. Indefinite pronouns such as everyone, each, either, neither, someone, and anyone are singular, so the verb and any later noun that refers to them must be singular too."
        ]
      }
    ]
  },
  {
    "id": "confused",
    "part": 2,
    "source": "B",
    "title": "Its/it's, their/they're/there, your/you're, whose/who's",
    "rule": "The different forms and abbreviations of these pronouns are frequently mixed up, but they are something you simply have to memorize. Tricks: take the abbreviation apart — if it is, you are, they are, or who is works in the sentence, use it's, you're, they're, or who's. If the sentence is trying to say that something belongs to something else, use its, your, their, or whose. If the sentence is trying to point to a specific or vague place, use there. Possessive pronouns never take an apostrophe.",
    "trap": "Using \"it's\" for possession because many possessives use apostrophes, or mixing up there/their/they're.",
    "before": "The fox hid it's cubs under the porch.",
    "after": "The fox hid its cubs under the porch.",
    "qs": [
      {
        "q": "The fox hid it's cubs under the porch. The best revision is",
        "o": [
          "The fox hid it's cubs under the porch.",
          "The fox hid its cubs under the porch.",
          "The fox hid its' cubs under the porch.",
          "The fox hid it is cubs under the porch."
        ],
        "a": 1,
        "why": "\"It's\" means \"it is,\" which does not fit. The cubs belong to the fox, so the possessive is \"its\" (no apostrophe).",
        "wx": [
          "\"it's\" means \"it is,\" which does not show ownership.",
          "",
          "\"its'\" is not a real English form.",
          "\"it is\" does not fit this slot."
        ]
      },
      {
        "q": "___ going to present first if the projector fails?",
        "o": [
          "Whose",
          "Who's",
          "Whos",
          "Who"
        ],
        "a": 1,
        "why": "\"Who is going\" works, so the contraction is \"Who's.\"",
        "wx": [
          "\"whos\" is missing the apostrophe and is not a correct form.",
          "",
          "\"whos\" is missing the apostrophe and is not a correct form.",
          "\"who\" is not the possessive or the contraction needed here."
        ]
      },
      {
        "q": "The students left ___ backpacks by the door.",
        "o": [
          "there",
          "they're",
          "their",
          "theirs"
        ],
        "a": 1,
        "why": "The backpacks belong to the students, so \"their\" is the possessive.",
        "wx": [
          "\"there\" points to a place.",
          "",
          "\"their\" means belonging to them.",
          "\"theirs\" mixes up a contraction, a possessive, or the place-word \"there.\""
        ]
      },
      {
        "q": "If ___ ready, we can start.",
        "o": [
          "your",
          "you're",
          "yore",
          "youre"
        ],
        "a": 1,
        "why": "\"You are ready\" works, so use the contraction \"you're.\"",
        "wx": [
          "\"your\" means belonging to you, not \"you are\".",
          "",
          "\"yore\" means a time long ago; it is not a pronoun.",
          "\"youre\" is missing the apostrophe and is not a correct form."
        ]
      },
      {
        "q": "The book is long; ___ a demanding read.",
        "o": [
          "its",
          "it's",
          "its'",
          "it"
        ],
        "a": 1,
        "why": "\"It is a demanding read\" works, so \"it's\" is correct.",
        "wx": [
          "\"its\" means belonging to it, not \"it is\".",
          "",
          "\"its'\" is not a real English form.",
          "\"it\" is not the form this sentence needs."
        ]
      },
      {
        "q": "The puppy chewed ___ toy.",
        "o": [
          "it's",
          "its",
          "its'",
          "it is"
        ],
        "a": 1,
        "why": "The toy belongs to the puppy, so use the possessive \"its.\" \"It is toy\" does not work.",
        "wx": [
          "\"it's\" means \"it is,\" which does not show ownership.",
          "",
          "\"its'\" is not a real English form.",
          "\"it is\" does not fit this slot."
        ]
      },
      {
        "q": "___ blooming earlier than usual this spring.",
        "o": [
          "There",
          "Their",
          "They're",
          "There's they"
        ],
        "a": 1,
        "why": "\"They are blooming\" works, so \"They're.\"",
        "wx": [
          "\"there\" points to a place.",
          "",
          "\"they're\" means \"they are\".",
          "\"there\" points to a place."
        ]
      },
      {
        "q": "Set the box over ___, by the window.",
        "o": [
          "their",
          "they're",
          "there",
          "there’re"
        ],
        "a": 1,
        "why": "The sentence points to a place, so \"there\" is correct.",
        "wx": [
          "\"their\" means belonging to them.",
          "",
          "\"there\" points to a place.",
          "\"there\" points to a place."
        ]
      },
      {
        "q": "Please bring ___ own pencil.",
        "o": [
          "you're",
          "your",
          "yore",
          "youre"
        ],
        "a": 1,
        "why": "The pencil belongs to you, so \"your\" is the possessive. \"You are own pencil\" does not work.",
        "wx": [
          "\"you're\" means \"you are,\" which does not show ownership.",
          "",
          "\"yore\" means a time long ago; it is not a pronoun.",
          "\"youre\" is missing the apostrophe and is not a correct form."
        ]
      },
      {
        "q": "The writer ___ book we read will visit Friday.",
        "o": [
          "who's",
          "whose",
          "whos",
          "whom"
        ],
        "a": 1,
        "why": "The book belongs to the writer, so \"whose\" is the possessive. \"Who is book\" does not work.",
        "wx": [
          "\"who's\" means \"who is\".",
          "",
          "\"whos\" is missing the apostrophe and is not a correct form.",
          "\"whom\" is an object form, not the possessive \"whose\" or the contraction \"who's\"."
        ]
      },
      {
        "q": "A quick test for \"it's\" is to",
        "o": [
          "add another apostrophe",
          "take the abbreviation apart and see whether \"it is\" works in the sentence",
          "always use \"it's\" for possession",
          "replace it with \"its'\""
        ],
        "a": 1,
        "why": "That is the official trick.",
        "wx": [
          "\"add another apostrophe\" mixes up a contraction, a possessive, or the place-word \"there.\"",
          "",
          "\"it's\" means \"it is,\" which does not show ownership.",
          "\"its'\" is not a real English form."
        ]
      },
      {
        "q": "Which sentence about the team is correct?",
        "o": [
          "The team celebrated it's victory.",
          "The team celebrated its victory.",
          "The team celebrated its' victory.",
          "The team celebrated it is victory."
        ],
        "a": 1,
        "why": "The victory belongs to the team, so \"its.\" \"It is victory\" does not work.",
        "wx": [
          "\"it's\" means \"it is,\" which does not show ownership.",
          "",
          "\"its'\" is not a real English form.",
          "\"it is\" does not fit this slot."
        ]
      }
    ],
    "bank": [
      {
        "q": "___ going to be late if they miss the bus.",
        "o": [
          "There",
          "Their",
          "They're",
          "They"
        ],
        "a": 1,
        "why": "\"They are going\" works, so \"They're.\"",
        "wx": [
          "\"there\" points to a place.",
          "",
          "\"they're\" means \"they are\".",
          "\"they\" is not the form this sentence needs."
        ]
      },
      {
        "q": "The table wobbled because ___ leg was loose.",
        "o": [
          "it's",
          "its",
          "its'",
          "it is"
        ],
        "a": 1,
        "why": "The leg belongs to the table, so \"its.\"",
        "wx": [
          "\"it's\" means \"it is,\" which does not show ownership.",
          "",
          "\"its'\" is not a real English form.",
          "\"it is\" does not fit this slot."
        ]
      },
      {
        "q": "___ the person ___ coat is on the chair?",
        "o": [
          "Whose / who's",
          "Who's / whose",
          "Who's / who's",
          "Whose / whose"
        ],
        "a": 1,
        "why": "\"Who is the person\" needs \"Who's.\" The coat belongs to someone, so \"whose.\"",
        "wx": [
          "This pairing mixes up a contraction and a possessive (or the place-word). Take the contraction apart (\"it is,\" \"you are,\" \"they are,\" \"who is\") to test it; use its/your/their/whose only for ownership, and \"there\" only for a place.",
          "",
          "This pairing mixes up a contraction and a possessive (or the place-word). Take the contraction apart (\"it is,\" \"you are,\" \"they are,\" \"who is\") to test it; use its/your/their/whose only for ownership, and \"there\" only for a place.",
          "This pairing mixes up a contraction and a possessive (or the place-word). Take the contraction apart (\"it is,\" \"you are,\" \"they are,\" \"who is\") to test it; use its/your/their/whose only for ownership, and \"there\" only for a place."
        ]
      },
      {
        "q": "If the sentence points to a place, the correct word is",
        "o": [
          "their",
          "they're",
          "there",
          "there’re"
        ],
        "a": 1,
        "why": "That is the official rule for \"there.\"",
        "wx": [
          "\"their\" means belonging to them.",
          "",
          "\"there\" points to a place.",
          "\"there\" points to a place."
        ]
      },
      {
        "q": "___ sure that this is ___ stop?",
        "o": [
          "Your / you’re",
          "You're / your",
          "You're / you're",
          "Your / your"
        ],
        "a": 1,
        "why": "\"You are sure\" needs \"You're.\" The stop belongs to you in this context, so \"your.\"",
        "wx": [
          "This pairing mixes up a contraction and a possessive (or the place-word). Take the contraction apart (\"it is,\" \"you are,\" \"they are,\" \"who is\") to test it; use its/your/their/whose only for ownership, and \"there\" only for a place.",
          "",
          "This pairing mixes up a contraction and a possessive (or the place-word). Take the contraction apart (\"it is,\" \"you are,\" \"they are,\" \"who is\") to test it; use its/your/their/whose only for ownership, and \"there\" only for a place.",
          "This pairing mixes up a contraction and a possessive (or the place-word). Take the contraction apart (\"it is,\" \"you are,\" \"they are,\" \"who is\") to test it; use its/your/their/whose only for ownership, and \"there\" only for a place."
        ]
      },
      {
        "q": "Possessive pronouns such as its, your, their, and whose",
        "o": [
          "always take an apostrophe",
          "never take an apostrophe",
          "take an apostrophe only when plural",
          "are interchangeable with contractions"
        ],
        "a": 1,
        "why": "The official reminder: if something belongs to something else, use the possessive form without an apostrophe.",
        "wx": [
          "\"always take an apostrophe\" mixes up a contraction, a possessive, or the place-word \"there.\"",
          "",
          "\"take an apostrophe only when plural\" mixes up a contraction, a possessive, or the place-word \"there.\"",
          "\"are interchangeable with contractions\" mixes up a contraction, a possessive, or the place-word \"there.\""
        ]
      }
    ]
  },
  {
    "id": "compare",
    "part": 2,
    "source": "B",
    "title": "Illogical comparisons",
    "rule": "There are two different kinds of comparisons that break the rules of logic. The first relies on the idea that you can only compare things that are alike in some way. Illogical comparisons tend to happen when a sentence is comparing something that belongs to someone or something else by using the comparison word than: the two things on either side of than must be in the same category. You can compare apples and oranges because both are fruits, but you cannot say \"I like Stanley's apples better than Cora\" — you have to say \"better than Cora's apples\" or \"better than Cora's.\" The second kind is that you cannot compare something to all things of that type; instead, you can only compare that thing to all other things of that type.",
    "trap": "Comparing a thing to a person (\"more sweeping than Jane Austen\" when you mean her novels), or writing \"easier than any space object\" instead of \"any other space object.\"",
    "before": "Charles Dickens's epic novels, which are almost universally admired by readers and critics alike, are more sweeping than Jane Austen, who writes novels of manners.",
    "after": "Charles Dickens's epic novels, which are almost universally admired by readers and critics alike, are more sweeping than Jane Austen's novels of manners.",
    "qs": [
      {
        "q": "Charles Dickens's epic novels, which are almost universally admired by readers and critics alike, are more sweeping than Jane Austen, who writes novels of manners. The best revision is",
        "o": [
          "leave the comparison to Jane Austen",
          "Charles Dickens's epic novels, which are almost universally admired by readers and critics alike, are more sweeping than Jane Austen's novels of manners.",
          "Charles Dickens's epic novels, which are almost universally admired by readers and critics alike, are more sweeping than Jane Austen who write novels of manners.",
          "Charles Dickens's epic novels, which are almost universally admired by readers and critics alike, are more sweeping than Jane Austen, novels of manners."
        ],
        "a": 1,
        "why": "Compare novels with novels, not novels with a person. The official fix is \"Jane Austen's novels of manners.\"",
        "wx": [
          "This still compares two things that are not in the same category. Compare like with like (a novel with a novel, a score with a score).",
          "",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like.",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like."
        ]
      },
      {
        "q": "I like Stanley's apples better than Cora. The best revision is",
        "o": [
          "I like Stanley's apples better than Cora.",
          "I like Stanley's apples better than Cora's.",
          "I like Stanley's apples better than Cora is.",
          "I like Stanley's apples better than of Cora."
        ],
        "a": 1,
        "why": "You can compare apples with apples: \"Cora's\" (apples). Comparing apples with Cora herself is illogical.",
        "wx": [
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like.",
          "",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like.",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like."
        ]
      },
      {
        "q": "For astronauts, the moon is easier to get to than any space object. The best revision is",
        "o": [
          "For astronauts, the moon is easier to get to than any space object.",
          "For astronauts, the moon is easier to get to than any other space object.",
          "For astronauts, the moon is easier to get to than any space objects are they.",
          "For astronauts, the moon is easier to get to than any, space object."
        ],
        "a": 1,
        "why": "You cannot compare something to all things of that type, because the set would include the thing itself. The official fix is \"any other space object.\"",
        "wx": [
          "This comparison leaves out \"other,\" so it compares the thing to a group that would include itself. Use \"any other.\"",
          "",
          "This comparison leaves out \"other,\" so it compares the thing to a group that would include itself. Use \"any other.\"",
          "This comparison leaves out \"other,\" so it compares the thing to a group that would include itself. Use \"any other.\""
        ]
      },
      {
        "q": "Some regulators believe that new drugs should have to go through an even more rigorous testing process than patients who prefer the one currently in place. The best revision is",
        "o": [
          "keep the comparison to patients",
          "Some regulators believe that new drugs should have to go through an even more rigorous testing process than the one currently in place, which patients prefer.",
          "Some regulators believe that new drugs should have to go through an even more rigorous testing process than patients, who prefer the one currently in place, do they.",
          "Some regulators believe that new drugs should have to go through an even more rigorous testing process than patients who prefer the one currently in place is."
        ],
        "a": 1,
        "why": "A testing process should be compared with a testing process (\"the one currently in place\"), not with patients.",
        "wx": [
          "This still compares two things that are not in the same category. Compare like with like (a novel with a novel, a score with a score).",
          "",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like.",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like."
        ]
      },
      {
        "q": "The cheetah's speed exceeds ___",
        "o": [
          "the lion.",
          "that of the lion.",
          "the lions.",
          "lion speed it."
        ],
        "a": 1,
        "why": "Compare speed with speed: \"that of the lion.\"",
        "wx": [
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like.",
          "",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like.",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like."
        ]
      },
      {
        "q": "The climate of Seattle is wetter than ___",
        "o": [
          "Phoenix.",
          "that of Phoenix.",
          "those of Phoenix.",
          "in Phoenix it is."
        ],
        "a": 1,
        "why": "Compare climate with climate. \"That\" is singular to match \"climate.\"",
        "wx": [
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like.",
          "",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like.",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like."
        ]
      },
      {
        "q": "Tokyo's subway is busier than London. The best revision is",
        "o": [
          "Tokyo's subway is busier than London.",
          "Tokyo's subway is busier than London's.",
          "Tokyo's subway is busier than London is people.",
          "Tokyo's subway is busier than in London subway."
        ],
        "a": 1,
        "why": "Compare a subway with a subway: \"London's.\"",
        "wx": [
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like.",
          "",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like.",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like."
        ]
      },
      {
        "q": "You can only compare things that are",
        "o": [
          "capitalized",
          "alike in some way — in the same category",
          "joined by a semicolon",
          "plural"
        ],
        "a": 1,
        "why": "That is the official first rule of logical comparison.",
        "wx": [
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like.",
          "",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like.",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like."
        ]
      },
      {
        "q": "The second official comparison rule is that you cannot compare something to all things of that type; instead, you compare it to",
        "o": [
          "the first thing in the list",
          "all other things of that type",
          "a person with the same name",
          "a related adjective"
        ],
        "a": 1,
        "why": "The official moon example is repaired with \"any other.\"",
        "wx": [
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like.",
          "",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like.",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like."
        ]
      },
      {
        "q": "Which sentence about scores is logical?",
        "o": [
          "Her score was higher than her brother.",
          "Her score was higher than her brother's.",
          "Her score was higher than her brother is.",
          "Her score was higher than of her brother them."
        ],
        "a": 1,
        "why": "Compare a score with a score: \"her brother's.\"",
        "wx": [
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like.",
          "",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like.",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like."
        ]
      },
      {
        "q": "The engine of this model is quieter than the earlier model. The best revision is",
        "o": [
          "The engine of this model is quieter than the earlier model.",
          "The engine of this model is quieter than that of the earlier model.",
          "The engine of this model is quieter than the earlier model is engine.",
          "The engine of this model is quieter than earlier model."
        ],
        "a": 1,
        "why": "Compare an engine with an engine: \"that of the earlier model.\"",
        "wx": [
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like.",
          "",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like.",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like."
        ]
      },
      {
        "q": "Which sentence correctly uses \"any other\"?",
        "o": [
          "This library is larger than any building in the city.",
          "This library is larger than any other building in the city.",
          "This library is larger than any other, building in the city they.",
          "This library is larger than any buildings is."
        ],
        "a": 1,
        "why": "The library is itself a building in the city, so compare it with any other building.",
        "wx": [
          "This comparison leaves out \"other,\" so it compares the thing to a group that would include itself. Use \"any other.\"",
          "",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like.",
          "This comparison leaves out \"other,\" so it compares the thing to a group that would include itself. Use \"any other.\""
        ]
      }
    ],
    "bank": [
      {
        "q": "I like Stanley's apples better than Cora is illogical because",
        "o": [
          "Cora is a proper noun",
          "it compares apples with a person instead of with Cora's apples",
          "a colon is missing",
          "\"better\" cannot be used with fruit"
        ],
        "a": 1,
        "why": "The official repair is \"Cora's apples\" or \"Cora's.\"",
        "wx": [
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like.",
          "",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like.",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like."
        ]
      },
      {
        "q": "The paintings of this century are darker than the last century. The best revision is",
        "o": [
          "The paintings of this century are darker than the last century.",
          "The paintings of this century are darker than those of the last century.",
          "The paintings of this century are darker than the last century is.",
          "The paintings of this century are darker than last century painting."
        ],
        "a": 1,
        "why": "Compare paintings with paintings: \"those of the last century.\"",
        "wx": [
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like.",
          "",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like.",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like."
        ]
      },
      {
        "q": "Mount Rainier is taller than any mountain in the Cascades. The best revision is",
        "o": [
          "Mount Rainier is taller than any mountain in the Cascades.",
          "Mount Rainier is taller than any other mountain in the Cascades.",
          "Mount Rainier is taller than any mountain in the Cascades is it.",
          "Mount Rainier is taller than any, mountain in the Cascades."
        ],
        "a": 1,
        "why": "Mount Rainier is itself a Cascade mountain, so use \"any other.\"",
        "wx": [
          "This comparison leaves out \"other,\" so it compares the thing to a group that would include itself. Use \"any other.\"",
          "",
          "This comparison leaves out \"other,\" so it compares the thing to a group that would include itself. Use \"any other.\"",
          "This comparison leaves out \"other,\" so it compares the thing to a group that would include itself. Use \"any other.\""
        ]
      },
      {
        "q": "A trick for spotting the first kind of illogical comparison is that it often appears with the word",
        "o": [
          "because",
          "than",
          "which",
          "however"
        ],
        "a": 1,
        "why": "The official note: these errors tend to happen when a sentence compares something that belongs to someone or something else by using \"than.\"",
        "wx": [
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like.",
          "",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like.",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like."
        ]
      },
      {
        "q": "The wingspan of the albatross is wider than the hawk. The best revision is",
        "o": [
          "The wingspan of the albatross is wider than the hawk.",
          "The wingspan of the albatross is wider than that of the hawk.",
          "The wingspan of the albatross is wider than the hawk is.",
          "The wingspan of the albatross is wider than hawk."
        ],
        "a": 1,
        "why": "Compare a wingspan with a wingspan.",
        "wx": [
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like.",
          "",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like.",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like."
        ]
      },
      {
        "q": "Which comparison of endings is logical?",
        "o": [
          "The film's ending is more surprising than the book.",
          "The film's ending is more surprising than the book's.",
          "The film's ending is more surprising than the book is ending not.",
          "The film's ending is more surprising than book."
        ],
        "a": 1,
        "why": "Compare an ending with an ending: \"the book's.\"",
        "wx": [
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like.",
          "",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like.",
          "This version compares two things that are not in the same category (for example, a book with a person, or a score with a brother). Compare like with like."
        ]
      }
    ]
  }
];
if (typeof module !== 'undefined') module.exports = GRAMMAR; else window.GRAMMAR = GRAMMAR;
