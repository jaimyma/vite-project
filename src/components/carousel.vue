<template>
    <div class="flex flex-col justify-center items-center bg-gray-900 text-white">
        <!-- Eerste scroll-sectie (snellere snelheid) -->
        <div class="scroll relative flex w-900px overflow-hidden mb-4">
            <div class="scroll-content speed-fast">
                <span>Generate detailed text based on specific input</span>
                <span>Answer complex questions in real-time</span>
                <span>Summarize lengthy articles and papers accurately</span>
                <span>Provide creative writing ideas and prompts</span>
                <span>Suggest improvements for creative writing projects</span>
                <span>Assist with writing personalized email responses</span>
                <span>Help brainstorm new business ideas or strategies</span>
                <span>Analyze data and provide insights for decisions</span>
            </div>
            <div class="scroll-content speed-fast">
                <span>Help with coding by suggesting optimizations</span>
                <span>Assist with debugging and error identification</span>
                <span>Generate code snippets for various programming languages</span>
                <span>Write scripts to automate repetitive tasks</span>
                <span>Explain complex technical concepts in simple terms</span>
                <span>Provide solutions for database design and queries</span>
                <span>Write algorithms for solving problems efficiently</span>
                <span>Provide tips for improving website performance</span>
            </div>
        </div>

        <!-- Tweede scroll-sectie (langzamere snelheid) -->
        <div class="scroll relative flex w-900px overflow-hidden">
            <div class="scroll-content speed-slow">
                <span>Translate documents with full context and accuracy</span>
                <span>Provide clear explanations for academic topics</span>
                <span>Offer insights for personal or professional growth</span>
                <span>Suggest ways to enhance productivity in the workplace</span>
                <span>Assist with managing personal finances and budgeting</span>
                <span>Help with meal planning and nutritional advice</span>
                <span>Provide tailored fitness routines based on goals</span>
                <span>Give personalized study tips and exam strategies</span>
            </div>
            <div class="scroll-content speed-slow">
                <span>Recommend books, articles, or podcasts for self-improvement</span>
                <span>Offer career advice and tips for job interviews</span>
                <span>Assist with research projects or academic papers</span>
                <span>Generate chatbot dialogues for customer support</span>
                <span>Help with creative brainstorming for projects</span>
                <span>Assist in building a personal brand and online presence</span>
                <span>Give tips for enhancing public speaking skills</span>
                <span>Help with language learning and fluency improvement</span>
            </div>
        </div>
    </div>
</template>

<style>
    .scroll {
        position: relative;
        width: 80%;
        height: 50px; /* Voeg een hoogte toe voor zichtbaarheid */
        overflow: hidden;
        -webkit-mask-image: linear-gradient(90deg, transparent, #fff 20%, #fff 80%, transparent);
    }

    .scroll-content {
        display: inline-flex;
        white-space: nowrap;
    }

    /* Snellere animatie voor de eerste scroll-sectie */
    .speed-fast {
        animation: scroll-fast 20s linear infinite; 
    }

    /* Langzamere animatie voor de tweede scroll-sectie */
    .speed-slow {
        animation: scroll-slow 23s linear infinite; 
    }

    @keyframes scroll-fast {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    }

    @keyframes scroll-slow {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0);
        }
    }

    .scroll div span {
        display: inline-flex;
        margin: 10px;
        background: #333;
        color: #fff;
        padding: 2px 10px;
        border-radius: 5px;
        transition: 0.5s;
    }

    .scroll div span:hover {
        background: #4caf50;
        cursor: pointer;
    }
</style>
