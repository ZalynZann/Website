
//scroll section
window.onscroll = () => {
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);
}


ScrollReveal({
  reset: true,
  distance: '50px',
  duration: 1000,
  delay: 50
});

ScrollReveal().reveal('.main-title, .heading, .wrapper1', {delay: 500, origin: 'left' });
ScrollReveal().reveal('.content, .box-container, .image2, .wrapper2', {delay: 500, origin: 'right' });




// Hero Scroll

var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
  });
});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});


//Chatbot
var chatContainer = document.getElementById('chat-container');
var chatToggleButton = document.getElementById('chat-toggle-btn');

function toggleChat() {
  chatContainer.style.display = chatContainer.style.display === 'none' ? 'block' : 'none';
}

function sendMessage() {
  var userMessage = document.getElementById('user-message').value;
  appendMessage('user', userMessage);

  // Process the user's message and generate the bot's reply
  var botReply = getBotReply(userMessage);

  // Simulating bot typing delay for a more realistic chat experience
  setTimeout(function() {
    appendMessage('bot', botReply);
  }, 1000);

  document.getElementById('user-message').value = '';
}

// Add event listener for the enter key press
document.getElementById('user-message').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevents the default behavior of the enter key (form submission)

    sendMessage(); // Call the sendMessage function when the enter key is pressed
  }
});

function appendMessage(sender, message) {
  var chatDisplay = document.getElementById('chat-display');
  var messageElement = document.createElement('div');
  messageElement.className = 'message ' + sender;
  messageElement.textContent = message;
  chatDisplay.appendChild(messageElement);
  chatDisplay.scrollTop = chatDisplay.scrollHeight;
}

function getBotReply(message) {
  // You can customize the chatbot's responses based on the user's message

  const lowerCaseMessage = message.toLowerCase();

  if (lowerCaseMessage.includes("hello")) {
    return "Hello! How can I assist you today?";
  } else if (lowerCaseMessage.includes("weather")) {
    return "The weather is sunny and warm.";
  } else if (lowerCaseMessage.includes("help")) {
    return "Sure, I'm here to help! What do you need assistance with?";
  } else if (lowerCaseMessage.includes("hi")) {
    return "Hello! How can I assist you today?";
  } else if (lowerCaseMessage.includes("firstkey")) {
    return "FirstKey is a business setup services in Dubai";
  } 
  // For this simple example, the bot will just echo the user's message
  return message;
}

