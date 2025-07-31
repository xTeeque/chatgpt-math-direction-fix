function containsHebrew(text) {
  return /[\u0590-\u05FF]/.test(text);
}

function isMathLike(text) {
  const clean = text.replace(/\s+/g, '');

  const basicMath = /\d[+\-*/=<>]\d/.test(clean);
  const functionMapping = /\w+:{?[^}]+}?[→⇒]{1,2}{?[^}]+}?/.test(clean);
  const mathSymbols = /[Σ∑∫∈∉∀∃∂√π∞∇≈≠≤≥→⇒⇔±∓⊆⊂⊇⊃∪∩∧∨⊕⊗⊥]/.test(text);
  const latexStyle = /\\?[a-zA-Z]+|\d+\/\d+/.test(clean);

  return (basicMath || functionMapping || mathSymbols || latexStyle) && !containsHebrew(text);
}

function applyLtrToMathElements() {
  const elements = document.querySelectorAll("span, code, pre, div");

  elements.forEach(el => {
    if (!el.dataset.ltrChecked) {
      const text = el.textContent;
      if (text && isMathLike(text)) {
        el.style.direction = "ltr";
        el.style.unicodeBidi = "isolate";
      }
      el.dataset.ltrChecked = "true";
    }
  });
}

applyLtrToMathElements();

const observer = new MutationObserver(() => {
  applyLtrToMathElements();
});
observer.observe(document.body, { childList: true, subtree: true });
