let currentTab = 'all-btn'

const tabActive = ['bg-[#3B82F6]', 'text-white']
const tabInActive = ['bg-gray-100', 'text-[#64748B]']

const allContainer = document.getElementById('all-container')
const interviewContainer = document.getElementById('interview-container')
const rejectedContainer = document.getElementById('rejected-container')


function toggleStyle(tab) {
    //console.log(tab)
    const tabs = ['all-btn', 'interview-btn', 'rejected-btn']

    for (const t of tabs) {
        const tabName = document.getElementById(t)
        if (t === tab) {
            tabName.classList.remove(...tabInActive)
            tabName.classList.add(...tabActive)
        }
        else {
            tabName.classList.add(...tabInActive)
            tabName.classList.remove(...tabActive)
        }
    }

    const pages = [allContainer, interviewContainer, rejectedContainer];
    for (const page of pages) {
        page.classList.add('hidden')
    }

    if (tab === 'all-btn') {
        allContainer.classList.remove('hidden')
    }
    else if (tab === 'interview-btn') {
        interviewContainer.classList.remove('hidden')
    }
    else if (tab === 'rejected-btn') {
        rejectedContainer.classList.remove('hidden')
    }

}
toggleStyle(currentTab);
//-----count update
let totalCount = document.getElementById('total')
let interviewCount = document.getElementById('interview-count')
let rejectedCount = document.getElementById('rejected-count')

totalCount.innerText = allContainer.children.length;


document.getElementById('jobs-container')
.addEventListener("click", function (event) {
    const clickBtn = event.target;
    if (clickBtn.classList.contains('interviewBtn')) {
        console.log('hi interviewBtn , how are you baby?');
    }

    if (clickBtn.classList.contains('rejectedBtn')) {
        console.log('hi failureBtn , how are you baby?');
    }

    if (clickBtn.classList.contains('deleteBtn')) {
        console.log('hi deleteBtn , how are you baby?');
    }
})