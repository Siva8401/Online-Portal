const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


      toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
    });
    
    searchBtn.addEventListener("click", () => {
        sidebar.classList.remove("close");
    });
    
    modeSwitch.addEventListener("click", () => {
        body.classList.toggle("dark");
    
        if (body.classList.contains("dark")) {
            modeText.innerText = "Light mode";
        } else {
            modeText.innerText = "Dark mode";
        }
    
        // Call the function to update <p> tag colors based on the current mode
        updateParagraphColors();
    });
    
    function updateParagraphColors() {
        const paragraphs = document.querySelectorAll('p');
    
        paragraphs.forEach(paragraph => {
            if (body.classList.contains("dark")) {
                paragraph.style.color = "#ffffff"; // White color in dark mode
            } else {
                paragraph.style.color = "#000000"; // Black color in light mode
            }
        });
    }
    
    function showContent(language) {
        const contentDisplay = document.getElementById('details');
        let content = '';

    switch (language) {
        case 'c':
            content = `
            <h2 class="bsc-question">C Programming</h2>
            <p>C Programming Language is a very popular computer programming language through which users and computers can communicate. Using this series of tutorials, one can learn C Programming Language from the basics. Every topic in these tutorials is explained with clear information and good examples. The content of all the topics is prepared by very experienced and expert faculty.</p>
            <h1 class="bsc-question">What is C?</h1>
            <p>C is a computer programming language used to design computer software and applications.</p>
            <h1 class="bsc-question">Why do we use C?</h1>
            <p>We use the C programming language to design computer software and applications.</p>
            <h1 class="bsc-question">Who invented C?</h1>
            <p>C Programming Language was invented in the year 1972 by <strong>Dennis Ritchie</strong> (Dennis MacAlistair Ritchie). He was an American Computer Scientist who worked at Bell Labs as a researcher along with Ken Thompson. He was born on 9th September 1941 and lived till 12th October 2011. He is said to be the <strong>Father of C</strong>.</p>
            <center><img src="dennies.jpg" alt="Dennis Ritchie, father of C" width="300" height="300"/></center>
            <h1 class="bsc-question">Software used to create and execute a C Program</h1>
            <p>Following are the applications and software used to create and execute C programs.</p>
            <ol>
            <li><strong>Turbo C</strong></li>
            <li><strong>Turbo C++</strong></li>
            <li><strong>GNU C</strong></li>
            <li><strong>Code Blocks</strong></li>
            <li><strong>Net Beans</strong></li>
            </ol>
            `;
            break;
        case 'cpp':
            content = `
                <h2>C++ Programming</h2>
                <p>C++ is an extension of C programming. It introduces object-oriented features to the C language.</p>
                <p>Here is a simple example of a C++ program:</p>
                <pre><code>
#include &lt;iostream&gt;

int main() {
    std::cout &lt;&lt; "Hello, World!";
    return 0;
}
                </code></pre>
            `;
            break;
        case 'java':
            content = `
                <h2>Java Programming</h2>
                <p>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</p>
                <p>Here is a simple example of a Java program:</p>
                <pre><code>
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
                </code></pre>
            `;
            break;
        case 'python':
            content = `
                <h2>Python Programming</h2>
                <p>Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability.</p>
                <p>Here is a simple example of a Python program:</p>
                <pre><code>
print("Hello, World!")
                </code></pre>
            `;
            break;
        default:
            content = `
                <h2>Welcome to the Programming Portal</h2>
                <p>Select a programming language from the menu to learn more.</p>
            `;
            break;
    }

    contentDisplay.innerHTML = content;
}
