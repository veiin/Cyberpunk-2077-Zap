async function enviarScript(scriptText){
    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line),
  main = document.querySelector("#main"),
  textarea = main.querySelector(`div[contenteditable="true"]`)
  
  if(!textarea) throw new Error("Não há uma conversa aberta")
  
  for(const line of lines) {
    console.log(line)
  
    textarea.textContent = line
    textarea.dispatchEvent(new InputEvent("input", { bubbles: true }));
  
    (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click()
    
    if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250))
  }
  
  return lines.length
  }
  
  let texto = "";
  
  for(let i = 1; i < 2077; i++){
    texto += `\nCyberpunk ${i}`;
  }
  
  enviarScript(`
  Gente, se vai sair o Cyberpunk 2077, cadê o
  ${texto}
  `).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
