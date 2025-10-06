document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.getElementById('searchBtn');
  const wordInput = document.getElementById('wordInput');
  const dictionaryResult = document.getElementById('dictionaryResult');

  // Search Function
  searchBtn.addEventListener('click', () => {
    const word = wordInput.value.trim();

    if (word === "") {
      dictionaryResult.innerHTML = "<p>Please enter a word to search.</p>";
      return;
    }

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.title === "No Definitions Found") {
          dictionaryResult.innerHTML = `<p>No definition found for <strong>${word}</strong>.</p>`;
          return;
        }

        const meaning = data[0].meanings[0];
        const phonetics = data[0].phonetics.find(p => p.audio) || {};


            // Handle synonyms properly
        const synonyms = [];

        // Create synonyms display text
        let synonymsDisplay = "";
        if (synonyms.length > 0) {
          synonymsDisplay = `<p><strong>Synonyms:</strong> ${synonyms.join(", ")}</p>`;
        } else {
          synonymsDisplay = `<p><strong>Synonyms:</strong> No synonyms found</p>`;
        }

        dictionaryResult.innerHTML = `
          <h3>${data[0].word}</h3>
          <p><strong>Part of Speech:</strong> ${meaning.partOfSpeech}</p>
          <p><strong>Definition:</strong> ${meaning.definitions[0].definition}, ${meaning.definitions[1].definition}, ${meaning.definitions[2].definition}</p>
          ${meaning.definitions[0].example ? `<p><em>Example:</em> ${meaning.definitions[0].example}</p>` : ""}
          ${phonetics.audio ? `<audio controls src="${phonetics.audio}"></audio>` : ""}
          <p>${synonymsDisplay}</p>
        `;
      })
  
      .catch(error => {
        dictionaryResult.innerHTML = "<p>Error fetching definition. Please try again later.</p>";
        console.error(error);
      });

  });
});
