import React, { useState, useEffect } from 'react';

const emojiData = [
  {
    emoji: "💀",
    label: "Skull",
    theme: "die",
    phrases: [
      "I wish you a quick and painless demise.",
      "If karma had a face, it would be yours as you perish.",
      "I hope you rest in peace... soon.",
      "I hope you enjoy your next life more than this one.",
      "RIP, in advance.",
      "I'm sending you off to the great beyond.",
      "I hope your next existence is less problematic.",
      "I'm wishing you a swift departure from this realm.",
      "I hope you find eternal rest... preferably soon.",
      "I'm preparing your farewell message in advance.",
      "I hope your journey to the afterlife is smooth.",
      "I'm wishing you a permanent solution to all your problems.",
      "I'm hoping you find peace in the void.",
      "I wish you a graceful exit from this mortal coil.",
      "I'm sending you off with my best regards to the underworld.",
      "I hope your next chapter is less eventful.",
      "I'm wishing you a one-way ticket to eternity.",
      "I hope you find what you're looking for in the afterlife.",
      "I'm preparing a eulogy for your imminent departure.",
      "I wish you a swift transition to the other side.",
      "I hope your final moments are as pleasant as possible.",
      "I'm sending you off with a permanent goodbye.",
      "I hope you rest in pieces... I mean peace.",
      "I'm wishing you a final farewell that lasts forever.",
      "I hope your next life comes with better customer service.",
      "I'm preparing you for your ultimate checkout.",
      "I wish you a smooth journey to the great unknown.",
      "I hope you find closure in the afterlife.",
      "I'm sending you off with eternal best wishes.",
      "I hope your departure is as swift as your arrival was slow.",
      "I'm wishing you a permanent solution to your existence.",
      "I hope you find peace in the eternal void.",
      "I'm preparing your final statement for the records.",
      "I wish you a quick and efficient departure.",
      "I hope your next existence is more satisfactory.",
      "I'm sending you off with my sincerest condolences.",
      "I hope you find what you need in the beyond.",
      "I'm wishing you a final resolution to all your issues.",
      "I hope your journey to eternity is uneventful.",
      "I'm preparing your permanent vacation package.",
      "I wish you a smooth transition to non-existence.",
      "I hope you find rest in the great beyond.",
      "I'm sending you off with a permanent farewell.",
      "I hope your next life is less complicated.",
      "I'm wishing you eternal peace and quiet.",
      "I hope you find satisfaction in the afterlife.",
      "I'm preparing your final exit strategy.",
      "I wish you a graceful departure from this world.",
      "I hope your journey to the void is pleasant.",
      "I'm sending you off with my best wishes for eternity.",
    ],
    personalised: (name, client) => [
      `Dear ${client}, I hope you find peace... permanently.`,
      `Hey ${client}, it's time to meet your fate.`,
      `${client}, I say it's curtains for you!`,
      `${client}, I'm wishing you a swift and final goodbye.`,
      `I hope you rest in peace, ${client}.`,
      `${client}, I'm sending you off to better (or worse) places.`,
      `I'm preparing your final farewell, ${client}.`,
      `${client}, I hope your next life treats you better.`,
      `I'm wishing you eternal rest, ${client}.`,
      `${client}, I say it's time for your grand exit.`,
      `I hope you find peace in the afterlife, ${client}.`,
      `${client}, I'm wishing you a permanent vacation from existence.`,
      `I'm sending you off to eternity, ${client}.`,
      `${client}, I hope your journey to the beyond is smooth.`,
      `I wish you a quick departure, ${client}.`,
      `${client}, I'm preparing your final goodbye message.`,
      `I hope you find what you need in the afterlife, ${client}.`,
      `${client}, I'm wishing you a permanent solution to your problems.`,
      `I hope you rest in peace forever, ${client}.`,
      `${client}, I'm sending you off with my best regards.`,
      `I wish you a swift transition, ${client}.`,
      `${client}, I hope your next existence is less problematic.`,
      `I'm preparing your eternal farewell, ${client}.`,
      `${client}, I say it's time for your final checkout.`,
      `I hope you find closure in the void, ${client}.`,
      `${client}, I'm wishing you a one-way ticket to eternity.`,
      `I'm sending you off with eternal best wishes, ${client}.`,
      `${client}, I hope your departure is as swift as possible.`,
      `I wish you a graceful exit, ${client}.`,
      `${client}, I'm preparing your final statement.`,
      `I hope you find peace in the great beyond, ${client}.`,
      `${client}, I'm wishing you a permanent resolution.`,
      `I'm sending you off to the underworld, ${client}.`,
      `${client}, I hope your journey to eternity is smooth.`,
      `I wish you a quick and efficient departure, ${client}.`,
      `${client}, I'm preparing your permanent vacation.`,
      `I hope you find rest in the afterlife, ${client}.`,
      `${client}, I'm wishing you eternal peace and quiet.`,
      `I'm sending you off with a permanent farewell, ${client}.`,
      `${client}, I hope your next life is less complicated.`,
      `I wish you a smooth transition to non-existence, ${client}.`,
      `${client}, I'm preparing your final exit strategy.`,
      `I hope you find satisfaction in the void, ${client}.`,
      `${client}, I'm wishing you a graceful departure.`,
      `I'm sending you off with my best wishes for eternity, ${client}.`,
      `${client}, I hope your journey to the great unknown is pleasant.`,
      `I wish you a final resolution to all your issues, ${client}.`,
      `${client}, I'm preparing your ultimate checkout.`,
      `I hope you find what you're looking for in the beyond, ${client}.`,
      `${client}, I'm wishing you a permanent goodbye.`,
    ]
  },
  {
    emoji: "😇",
    label: "Angel",
    theme: "nice",
    phrases: [
      "I wish you a blessed day!",
      "I'm wishing you all the best.",
      "I hope you're surrounded by good vibes.",
      "I'm sending you positivity and light.",
      "I hope today is your lucky day!",
      "I'm wishing you happiness and joy.",
      "I hope your day is filled with wonderful moments.",
      "I'm sending you warm wishes and good fortune.",
      "I hope everything goes perfectly for you.",
      "I'm wishing you success in all your endeavors.",
      "I hope you have an absolutely amazing day!",
      "I'm sending you all the positive energy I can muster.",
      "I hope you're blessed with happiness today.",
      "I'm wishing you peace, love, and all good things.",
      "I hope your day brings you nothing but joy.",
      "I'm sending you sunshine and smiles.",
      "I wish you endless happiness and prosperity.",
      "I'm hoping your day is as wonderful as you are.",
      "I'm sending you good vibes and positive thoughts.",
      "I hope everything works out beautifully for you.",
      "I'm wishing you a day filled with blessings.",
      "I hope you're surrounded by love and kindness.",
      "I'm sending you all my best wishes today.",
      "I hope your day is absolutely perfect.",
      "I'm wishing you success in everything you do.",
      "I hope you feel the warmth of happiness today.",
      "I'm sending you positive energy and good fortune.",
      "I wish you a day full of wonderful surprises.",
      "I'm hoping your day exceeds all expectations.",
      "I'm sending you love, light, and positivity.",
      "I hope your day is filled with magical moments.",
      "I'm wishing you endless joy and contentment.",
      "I hope you experience nothing but happiness today.",
      "I'm sending you warm thoughts and good wishes.",
      "I wish you a day that's absolutely fantastic.",
      "I'm hoping everything goes smoothly for you.",
      "I'm sending you blessings and good fortune.",
      "I hope your day is as bright as the sun.",
      "I'm wishing you peace, happiness, and prosperity.",
      "I hope you feel loved and appreciated today.",
      "I'm sending you all the good energy in the world.",
      "I wish you a day filled with laughter and joy.",
      "I'm hoping your day brings you pure happiness.",
      "I'm sending you positive vibes and good luck.",
      "I hope everything in your day goes perfectly.",
      "I'm wishing you a wonderful and blessed day.",
      "I hope you're surrounded by positivity today.",
      "I'm sending you my warmest wishes and regards.",
      "I wish you a day that's truly extraordinary.",
      "I'm hoping your day is filled with amazing moments.",
    ],
    personalised: (name, client) => [
      `${client}, I'm sending you angelic wishes!`,
      `I say: You deserve all things good, ${client}.`,
      `Smiles from above, just for you, ${client}!`,
      `${client}, I'm wishing you the most wonderful day!`,
      `I hope you have an amazing day, ${client}!`,
      `${client}, I'm sending you all my positive vibes!`,
      `I'm wishing you happiness and joy, ${client}!`,
      `${client}, I hope everything works out perfectly for you!`,
      `I'm sending you warm wishes, ${client}!`,
      `${client}, I hope your day is filled with blessings!`,
      `I'm wishing you success and happiness, ${client}!`,
      `${client}, I hope you're surrounded by love and positivity!`,
      `I'm sending you all the good energy, ${client}!`,
      `${client}, I wish you nothing but the best!`,
      `I hope your day is absolutely perfect, ${client}!`,
      `${client}, I'm sending you sunshine and smiles!`,
      `I'm wishing you endless happiness, ${client}!`,
      `${client}, I hope your day is as wonderful as you are!`,
      `I'm sending you good vibes and positive thoughts, ${client}!`,
      `${client}, I hope everything works out beautifully for you!`,
      `I'm wishing you a day filled with blessings, ${client}!`,
      `${client}, I hope you're surrounded by love and kindness!`,
      `I'm sending you all my best wishes today, ${client}!`,
      `${client}, I hope your day is absolutely perfect!`,
      `I'm wishing you success in everything you do, ${client}!`,
      `${client}, I hope you feel the warmth of happiness today!`,
      `I'm sending you positive energy and good fortune, ${client}!`,
      `${client}, I wish you a day full of wonderful surprises!`,
      `I'm hoping your day exceeds all expectations, ${client}!`,
      `${client}, I'm sending you love, light, and positivity!`,
      `I hope your day is filled with magical moments, ${client}!`,
      `${client}, I'm wishing you endless joy and contentment!`,
      `I hope you experience nothing but happiness today, ${client}!`,
      `${client}, I'm sending you warm thoughts and good wishes!`,
      `I wish you a day that's absolutely fantastic, ${client}!`,
      `${client}, I'm hoping everything goes smoothly for you!`,
      `I'm sending you blessings and good fortune, ${client}!`,
      `${client}, I hope your day is as bright as the sun!`,
      `I'm wishing you peace, happiness, and prosperity, ${client}!`,
      `${client}, I hope you feel loved and appreciated today!`,
      `I'm sending you all the good energy in the world, ${client}!`,
      `${client}, I wish you a day filled with laughter and joy!`,
      `I'm hoping your day brings you pure happiness, ${client}!`,
      `${client}, I'm sending you positive vibes and good luck!`,
      `I hope everything in your day goes perfectly, ${client}!`,
      `${client}, I'm wishing you a wonderful and blessed day!`,
      `I hope you're surrounded by positivity today, ${client}!`,
      `${client}, I'm sending you my warmest wishes and regards!`,
      `I wish you a day that's truly extraordinary, ${client}!`,
      `${client}, I'm hoping your day is filled with amazing moments!`,
    ]
  },
  {
    emoji: "🤡",
    label: "Clown",
    theme: "silly",
    phrases: [
      "I think if clowning was a sport, you'd be the MVP.",
      "I'm wondering if your day is as funny as your questions?",
      "I'm telling you to keep juggling those issues!",
      "I think you'd make the circus proud.",
      "I'm encouraging you to keep honking that horn!",
      "I think you're the star of our circus!",
      "I'm suggesting you hold onto your red nose!",
      "I think your jokes are almost as funny as your requests.",
      "I'm telling you to keep the show going!",
      "I think you're ready for the big top!",
      "I'm encouraging you to embrace your inner clown!",
      "I think you'd fit right in at the circus!",
      "I'm telling you to keep spreading the laughter!",
      "I think you're the funniest person I've talked to today!",
      "I'm suggesting you take your act on the road!",
      "I think you'd win the comedy competition hands down.",
      "I'm telling you to keep the comedy coming!",
      "I think your sense of humor is absolutely legendary.",
      "I'm encouraging you to never stop being funny!",
      "I think you're the comedic genius of our generation.",
      "I'm telling you to keep making people laugh!",
      "I think your jokes are funnier than a clown car full of clowns.",
      "I'm suggesting you start your own comedy show!",
      "I think you're ready for prime time comedy!",
      "I'm encouraging you to keep the laughs rolling!",
      "I think your humor is as infectious as a clown's smile.",
      "I'm telling you to keep the entertainment value high!",
      "I think you'd make a great stand-up comedian.",
      "I'm suggesting you never lose your sense of humor!",
      "I think your comedic timing is absolutely perfect.",
      "I'm encouraging you to keep the show entertaining!",
      "I think you're the funniest thing since sliced bread... wait, that's not funny.",
      "I'm telling you to keep the comedy gold coming!",
      "I think your jokes are funnier than a rubber chicken.",
      "I'm suggesting you take your comedy act to the next level!",
      "I think you're ready to headline at the comedy club!",
      "I'm encouraging you to keep making people smile!",
      "I think your sense of humor is a gift to the world.",
      "I'm telling you to keep the laughs coming non-stop!",
      "I think you're the comedic relief we all need.",
      "I'm suggesting you never stop being hilarious!",
      "I think your jokes are funnier than a whoopee cushion.",
      "I'm encouraging you to keep the comedy train rolling!",
      "I think you're the funniest person in the entire circus!",
      "I'm telling you to keep spreading joy and laughter!",
      "I think your humor is as bright as a clown's colorful outfit.",
      "I'm suggesting you keep the comedy show running!",
      "I think you're ready to be the star of the show!",
      "I'm encouraging you to keep the entertainment flowing!",
      "I think your jokes are funnier than a pie in the face!",
    ],
    personalised: (name, client) => [
      `${client}, I say you're the star of our circus!`,
      `I'm telling you to hold onto your red nose, ${client}!`,
      `I think your jokes are almost as funny as your requests, ${client}.`,
      `${client}, I'm encouraging you to keep the show going!`,
      `I think you're ready for the big top, ${client}!`,
      `${client}, I'm telling you to embrace your inner clown!`,
      `I think you'd fit right in at the circus, ${client}!`,
      `${client}, I'm encouraging you to keep spreading the laughter!`,
      `I think you're the funniest person I've talked to today, ${client}!`,
      `${client}, I'm telling you to keep juggling those issues!`,
      `I think you'd make the circus proud, ${client}!`,
      `${client}, I'm encouraging you to keep honking that horn!`,
      `I think if clowning was a sport, you'd be the MVP, ${client}!`,
      `${client}, I'm telling you to keep the comedy coming!`,
      `I'm suggesting you take your act on the road, ${client}!`,
      `${client}, I think you'd win the comedy competition hands down!`,
      `I'm telling you to keep the laughs rolling, ${client}!`,
      `${client}, I think your sense of humor is absolutely legendary!`,
      `I'm encouraging you to never stop being funny, ${client}!`,
      `${client}, I think you're the comedic genius of our generation!`,
      `I'm telling you to keep making people laugh, ${client}!`,
      `${client}, I think your jokes are funnier than a clown car full of clowns!`,
      `I'm suggesting you start your own comedy show, ${client}!`,
      `${client}, I think you're ready for prime time comedy!`,
      `I'm encouraging you to keep the entertainment value high, ${client}!`,
      `${client}, I think you'd make a great stand-up comedian!`,
      `I'm suggesting you never lose your sense of humor, ${client}!`,
      `${client}, I think your comedic timing is absolutely perfect!`,
      `I'm encouraging you to keep the show entertaining, ${client}!`,
      `${client}, I think you're the funniest thing since sliced bread... wait, that's not funny!`,
      `I'm telling you to keep the comedy gold coming, ${client}!`,
      `${client}, I think your jokes are funnier than a rubber chicken!`,
      `I'm suggesting you take your comedy act to the next level, ${client}!`,
      `${client}, I think you're ready to headline at the comedy club!`,
      `I'm encouraging you to keep making people smile, ${client}!`,
      `${client}, I think your sense of humor is a gift to the world!`,
      `I'm telling you to keep the laughs coming non-stop, ${client}!`,
      `${client}, I think you're the comedic relief we all need!`,
      `I'm suggesting you never stop being hilarious, ${client}!`,
      `${client}, I think your jokes are funnier than a whoopee cushion!`,
      `I'm encouraging you to keep the comedy train rolling, ${client}!`,
      `${client}, I think you're the funniest person in the entire circus!`,
      `I'm telling you to keep spreading joy and laughter, ${client}!`,
      `${client}, I think your humor is as bright as a clown's colorful outfit!`,
      `I'm suggesting you keep the comedy show running, ${client}!`,
      `${client}, I think you're ready to be the star of the show!`,
      `I'm encouraging you to keep the entertainment flowing, ${client}!`,
      `${client}, I think your jokes are funnier than a pie in the face!`,
      `I'm telling you to keep the comedy coming strong, ${client}!`,
    ]
  }
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function ThemeToggle({ darkMode, setDarkMode, themeStyles }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    setDarkMode(!darkMode);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <button
      onClick={handleToggle}
      style={{
        background: 'transparent',
        border: 'none',
        fontSize: '1.8rem',
        cursor: 'pointer',
        padding: '8px',
        borderRadius: '50%',
        transition: 'transform 0.3s ease, rotate 0.3s ease',
        lineHeight: '1',
        transform: isAnimating ? 'rotate(360deg) scale(1.2)' : 'rotate(0deg) scale(1)',
      }}
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
}

function App() {
  const [agentName, setAgentName] = useState(() => {
    return localStorage.getItem('agentName') || '';
  });
  const [enteredName, setEnteredName] = useState(() => {
    return localStorage.getItem('agentName') || '';
  });
  const [showChangeName, setShowChangeName] = useState(false);
  const [emojiIndex, setEmojiIndex] = useState(null);
  const [cards, setCards] = useState(() => {
    const saved = localStorage.getItem('cards');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  
  // Card form state
  const [clientName, setClientName] = useState('');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  useEffect(() => {
    localStorage.setItem('agentName', agentName);
  }, [agentName]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  const themeStyles = darkMode ? {
    background: '#1a1a1a',
    text: '#e0e0e0',
    cardBg: '#2d2d2d',
    cardBorder: '#404040',
    headerBg: '#0d1b2a',
    inputBg: '#2d2d2d',
    inputBorder: '#404040',
    inputText: '#e0e0e0',
    buttonBg: '#0d1b2a',
    buttonHover: '#1a2d42',
    footerText: '#888',
    emptyText: '#666',
  } : {
    background: '#f9f9f9',
    text: '#222',
    cardBg: '#fff',
    cardBorder: '#e0e0e0',
    headerBg: '#0b2239',
    inputBg: '#fff',
    inputBorder: '#ccc',
    inputText: '#222',
    buttonBg: '#0b2239',
    buttonHover: '#0d2d4f',
    footerText: '#aaa',
    emptyText: '#888',
  };

  const handleNameSubmit = () => {
    if (enteredName.trim().length > 0) {
      setAgentName(enteredName.trim());
      setShowChangeName(false);
    }
  };

  if (!agentName || showChangeName) {
    return (
      <div style={{
        display: 'flex',
        height:'100vh', 
        alignItems:'center', 
        justifyContent:'center', 
        flexDirection:'column', 
        fontFamily:'sans-serif',
        background: themeStyles.background,
        color: themeStyles.text,
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px'
        }}>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} themeStyles={themeStyles} />
        </div>
        <h1>Welcome Customer Support Agent!</h1>
        <div>
          <label>Your Name: </label>
          <input 
            style={{
              padding:'8px', 
              fontSize:'1rem',
              background: themeStyles.inputBg,
              color: themeStyles.inputText,
              border: `1px solid ${themeStyles.inputBorder}`,
              borderRadius: '4px'
            }}
            value={enteredName} 
            onChange={e => setEnteredName(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && handleNameSubmit()}
            placeholder="Enter your name" 
          />
          <button 
            style={{
              marginLeft:'10px', 
              padding:'8px', 
              fontSize:'1rem',
              background: themeStyles.buttonBg,
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
            onClick={handleNameSubmit}
          >Continue</button>
        </div>
      </div>
    );
  }

  const handleCreateCard = () => {
    if (emojiIndex === null) return;
    const data = emojiData[emojiIndex];
    let phrase;
    if (clientName.trim()) {
      phrase = getRandom(data.personalised(agentName, clientName.trim()));
    } else {
      phrase = getRandom(data.phrases);
    }
    setCards([{ 
      emoji: data.emoji,
      theme: data.theme,
      phrase, 
      clientName: clientName.trim(),
      agentName,
      id: Date.now() + Math.random(),
      favorited: false
    }, ...cards]);
  };

  const handleDeleteCard = (cardId) => {
    setCards(cards.filter(card => card.id !== cardId));
  };

  const handleDeleteAllCards = () => {
    if (showFavoritesOnly) {
      // When viewing favorites, only delete the favorited cards
      const cardsToDelete = favoritedCards.length;
      if (cardsToDelete > 0 && window.confirm(`Are you sure you want to delete all ${cardsToDelete} favorited card(s)?`)) {
        setCards(cards.filter(card => !card.favorited));
        setShowFavoritesOnly(false); // Switch back to all cards view
      }
    } else {
      // When viewing all cards, delete everything except favorited cards
      const nonFavoritedCount = cards.filter(card => !card.favorited).length;
      if (nonFavoritedCount > 0 && window.confirm(`Are you sure you want to delete all ${nonFavoritedCount} non-favorited card(s)? Favorited cards will be kept.`)) {
        setCards(cards.filter(card => card.favorited));
      } else if (nonFavoritedCount === 0 && favoritedCards.length > 0) {
        alert('All cards are favorited. Unfavorite some cards first if you want to delete them.');
      }
    }
  };

  const handleToggleFavorite = (cardId) => {
    setCards(cards.map(card => 
      card.id === cardId ? { ...card, favorited: !card.favorited } : card
    ));
  };

  const favoritedCards = cards.filter(card => card.favorited);
  const displayedCards = showFavoritesOnly ? favoritedCards : cards;

  return (
    <div style={{
      fontFamily:'sans-serif', 
      background: themeStyles.background, 
      minHeight:'100vh', 
      paddingBottom:'64px',
      color: themeStyles.text
    }}>
      <header style={{
        background: themeStyles.headerBg,
        color:'white',
        padding:'24px 0',
        textAlign:'center', 
        marginBottom:'32px',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          display: 'flex',
          gap: '10px',
          alignItems: 'center'
        }}>
          {cards.length > 0 && (
            <button
              onClick={handleDeleteAllCards}
              style={{
                background: 'rgba(255,68,68,0.9)',
                border: 'none',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                transition: 'background 0.2s',
                fontWeight: '500'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(204,0,0,0.9)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255,68,68,0.9)';
              }}
              title={`Delete all ${cards.length} card(s)`}
            >
              🗑️ Close All ({cards.length})
            </button>
          )}
          <button
            onClick={() => setShowChangeName(true)}
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              color: 'white',
              padding: '6px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              transition: 'background 0.2s'
            }}
            title="Change your name"
          >
            Change Name
          </button>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} themeStyles={themeStyles} />
        </div>
        <h2>Phrase Card Generator for Agents</h2>
        <div style={{fontSize:'18px'}}>👋 Welcome, <b>{agentName}</b>!</div>
      </header>
      
      <main style={{
        maxWidth: '400px', 
        margin: '0 auto', 
        background: themeStyles.cardBg, 
        borderRadius:'16px',
        boxShadow: darkMode ? '0 4px 24px rgba(0,0,0,0.5)' : '0 4px 24px #0001', 
        padding:'32px 16px',
        border: `1px solid ${themeStyles.cardBorder}`
      }}>
        <section>
          <h3 style={{marginBottom:'10px'}}>1. Choose an Emoji Theme</h3>
          <div style={{display: 'flex', gap:'10px', marginBottom:'20px', flexWrap:'wrap'}}>
            {emojiData.map((data, idx) => (
              <button 
                key={data.emoji}
                onClick={() => setEmojiIndex(idx)}
                style={{
                  fontSize:'2rem',
                  padding:'16px',
                  borderRadius:'50%',
                  border: emojiIndex === idx ? `2px solid ${themeStyles.headerBg}` : `2px solid ${themeStyles.cardBorder}`,
                  background: emojiIndex === idx ? (darkMode ? '#3a3a3a' : '#e4ebff') : themeStyles.cardBg,
                  boxShadow: emojiIndex === idx ? (darkMode ? '0 4px 16px rgba(0,0,0,0.5)' : '0 4px 16px #0056a330') : 'none',
                  transition:'all 0.2s',
                  cursor:'pointer',
                  outline:'none'
                }}
                title={data.label}
              >{data.emoji}</button>
            ))}
          </div>
        </section>
        <section>
          <h3 style={{marginBottom:'10px'}}>2. Card Customisation</h3>
          <label>Client Name (optional):<br />
            <input 
              style={{
                padding:'8px', 
                fontSize:'1rem', 
                marginTop: '6px',
                marginBottom:'4px', 
                width:'100%',
                background: themeStyles.inputBg,
                color: themeStyles.inputText,
                border: `1px solid ${themeStyles.inputBorder}`,
                borderRadius: '4px'
              }}
              value={clientName}
              onChange={e => setClientName(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleCreateCard()}
              placeholder="Enter client name"
            />
          </label>
          <button 
            style={{
              marginTop:'12px', 
              padding:'10px 24px',
              fontSize:'1.1rem',
              background: themeStyles.buttonBg,
              color:'white',
              border:'none',
              borderRadius:'8px',
              cursor: emojiIndex === null ? 'not-allowed':'pointer',
              opacity: emojiIndex === null ? 0.6 : 1
            }}
            disabled={emojiIndex === null}
            onClick={handleCreateCard}
          >Create Card</button>
        </section>
      </main>
      {cards.length > 0 && (
        <div style={{
          maxWidth:'750px',
          margin:'24px auto 16px auto',
          textAlign:'center',
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {favoritedCards.length > 0 && (
            <button
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              style={{
                padding:'12px 24px',
                fontSize:'1rem',
                background: showFavoritesOnly ? '#ffd700' : 'rgba(255,215,0,0.2)',
                color: showFavoritesOnly ? '#000' : '#ffd700',
                border: `2px solid #ffd700`,
                borderRadius:'8px',
                cursor:'pointer',
                fontWeight:'600',
                transition: 'all 0.3s ease',
                boxShadow: showFavoritesOnly 
                  ? (darkMode ? '0 4px 12px rgba(255,215,0,0.5)' : '0 4px 12px rgba(255,215,0,0.4)')
                  : 'none',
                transform: showFavoritesOnly ? 'scale(1.05)' : 'scale(1)'
              }}
              onMouseEnter={(e) => {
                if (!showFavoritesOnly) {
                  e.target.style.background = 'rgba(255,215,0,0.3)';
                  e.target.style.transform = 'scale(1.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (!showFavoritesOnly) {
                  e.target.style.background = 'rgba(255,215,0,0.2)';
                  e.target.style.transform = 'scale(1)';
                }
              }}
              title={showFavoritesOnly ? 'Show all cards' : `Show ${favoritedCards.length} favorited card(s)`}
            >
              ⭐ {showFavoritesOnly ? 'Show All' : `Favorites (${favoritedCards.length})`}
            </button>
          )}
          <button
            onClick={handleDeleteAllCards}
            style={{
              padding:'12px 24px',
              fontSize:'1rem',
              background: '#ff4444',
              color:'white',
              border:'none',
              borderRadius:'8px',
              cursor:'pointer',
              fontWeight:'600',
              transition: 'background 0.2s, transform 0.1s',
              boxShadow: darkMode ? '0 2px 8px rgba(255,68,68,0.4)' : '0 2px 8px rgba(255,68,68,0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#cc0000';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#ff4444';
              e.target.style.transform = 'scale(1)';
            }}
            title={`Delete all ${cards.length} card(s)`}
          >
            🗑️ Close All Cards ({cards.length})
          </button>
        </div>
      )}
      <div style={{
        maxWidth:'750px',
        margin:'32px auto 0 auto',
        display:'flex',
        flexWrap:'wrap',
        gap:'24px',
        justifyContent:'center'
      }}>
        {displayedCards.length === 0 && (
          <div style={{
            color: themeStyles.emptyText, 
            marginTop:'32px', 
            textAlign:'center', 
            width:'100%'
          }}>
            {showFavoritesOnly ? 'No favorited cards yet. Click the ⭐ on any card to favorite it!' : 'No cards created yet.'}
          </div>
        )}
        {displayedCards.map((card, idx) => (
          <div key={card.id || idx}
            style={{
              background: themeStyles.cardBg,
              border: `1.5px solid ${themeStyles.cardBorder}`,
              borderRadius:'18px',
              minWidth:'260px',
              maxWidth:'320px',
              boxShadow: darkMode ? '0 2px 14px rgba(0,0,0,0.5)' : '0 2px 14px #0002',
              padding:'22px 18px 18px 18px',
              marginBottom:'8px',
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              transition: 'all 0.3s ease',
              position: 'relative',
              opacity: showFavoritesOnly && !card.favorited ? 0 : 1,
              transform: card.favorited ? 'scale(1.02)' : 'scale(1)',
              border: card.favorited ? `2px solid #ffd700` : `1.5px solid ${themeStyles.cardBorder}`,
              boxShadow: card.favorited 
                ? (darkMode ? '0 4px 20px rgba(255,215,0,0.4)' : '0 4px 20px rgba(255,215,0,0.3)')
                : (darkMode ? '0 2px 14px rgba(0,0,0,0.5)' : '0 2px 14px #0002')
            }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleToggleFavorite(card.id);
              }}
              style={{
                position: 'absolute',
                top: '8px',
                left: '8px',
                background: 'transparent',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                padding: 0,
                transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                transform: card.favorited ? 'scale(1.2) rotate(0deg)' : 'scale(1) rotate(0deg)',
                filter: card.favorited ? 'drop-shadow(0 0 4px rgba(255,215,0,0.8))' : 'none'
              }}
              onMouseEnter={(e) => {
                if (!card.favorited) {
                  e.target.style.transform = 'scale(1.15) rotate(5deg)';
                  e.target.style.filter = 'drop-shadow(0 0 2px rgba(255,215,0,0.5))';
                }
              }}
              onMouseLeave={(e) => {
                if (!card.favorited) {
                  e.target.style.transform = 'scale(1) rotate(0deg)';
                  e.target.style.filter = 'none';
                }
              }}
              title={card.favorited ? 'Remove from favorites' : 'Add to favorites'}
            >
              {card.favorited ? '⭐' : '☆'}
            </button>
            <button
              onClick={() => handleDeleteCard(card.id)}
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                background: '#ff4444',
                border: 'none',
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                color: 'white',
                fontWeight: 'bold',
                lineHeight: '1',
                padding: 0,
                transition: 'background 0.2s, transform 0.2s',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#cc0000';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#ff4444';
                e.target.style.transform = 'scale(1)';
              }}
              title="Delete this card"
            >
              ×
            </button>
            <div style={{fontSize:'2.6rem', margin:'6px 0'}}>{card.emoji}</div>
            <div style={{
              fontWeight:'bold', 
              fontSize:'1.1rem', 
              color: themeStyles.headerBg, 
              margin:'8px 0 7px 0', 
              textAlign:'center'
            }}>
              {card.clientName ? `Message for ${card.clientName}` : "Agent Crafted Message"}
            </div>
            <div style={{
              fontSize:'1.08rem', 
              color: themeStyles.text,
              marginBottom:'10px', 
              textAlign:'center'
            }}>
              {card.phrase}
            </div>
            <div style={{
              alignSelf:'flex-end', 
              opacity:0.55, 
              fontSize:'0.93rem',
              marginTop:'2px',
              color: themeStyles.text
            }}>- {card.agentName}</div>
          </div>
        ))}
      </div>
      <footer style={{
        marginTop:'64px',
        padding:'32px 0 10px 0', 
        textAlign:'center', 
        color: themeStyles.footerText, 
        fontSize:'0.98rem'
      }}>
        <hr style={{
          marginBottom:'8px',
          borderColor: themeStyles.cardBorder
        }}/>
        <span>Support Phraser &copy; {new Date().getFullYear()} • For internal agent use only.</span>
      </footer>
    </div>
  );
}

export default App;
