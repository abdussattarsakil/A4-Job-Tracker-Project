console.log('hi , connected');

let currentTab = 'allBtn'

const tabActive = ['bg-[#3B82F6]', 'text-white']
const tabInActive = ['bg-gray-100', 'text-[#64748B]']

const allContainer = document.getElementById('all-container')
const interviewContainer = document.getElementById('interview-container')
const rejectedContainer = document.getElementById('rejected-container')

const noJobs = document.querySelector('.noJobsFilterSection')


function toggleStyle(tab) {
    //console.log(tab)
    currentTab = tab;

    const tabs = ['allBtn', 'interviewBtn', 'rejectedBtn']

    for (const t of tabs) {
        const tabName = document.getElementById(t)
        if (t === tab) {
            tabName.classList.remove(...tabInActive)
            tabName.classList.add(...tabActive)
            console.log(tabName)
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

    noJobs.classList.add('hidden')

    if (tab === 'allBtn') {
        allContainer.classList.remove('hidden')
        if (allContainer.children.length == 0) {
            noJobs.classList.remove('hidden')
        }
    }
    else if (tab === 'interviewBtn') {
        interviewContainer.classList.remove('hidden')
        if (interviewContainer.children.length == 0) {
            noJobs.classList.remove('hidden')
        }
    }
    else if (tab === 'rejectedBtn') {
        rejectedContainer.classList.remove('hidden')
        if (rejectedContainer.children.length == 0) {
            noJobs.classList.remove('hidden')
        }
    }

}
toggleStyle(currentTab);
//-----count update
let totalCount = document.getElementById('total')
let interviewCount = document.getElementById('interview-count')
let rejectedCount = document.getElementById('rejected-count')

const showJobsNumber = document.getElementById('showJobsNumber')

function jobCount() {
    // totalCount.innerText = allContainer.children.length;
    // interviewCount.innerText = interviewContainer.children.length
    // rejectedCount.innerText = rejectedContainer.children.length
    const counts = {
        allBtn: allContainer.children.length,
        interviewBtn: interviewContainer.children.length,
        rejectedBtn: rejectedContainer.children.length
    }

    totalCount.innerText = counts.allBtn
    interviewCount.innerText = counts.interviewBtn
    rejectedCount.innerText = counts.rejectedBtn

    showJobsNumber.innerText = counts[currentTab];

    if (counts[currentTab] == 0) {
        noJobs.classList.remove('hidden')
    }
    else {
        noJobs.classList.add('hidden')
    }
}
jobCount()
// ----card filtering
document.getElementById('jobs-container')
    .addEventListener("click", function (event) {
        const clickBtn = event.target;
        const card = clickBtn.closest('.card')
        //console.log(card)
        const cardStatus = document.querySelector('.cardStatus')

        const parentNode = card.parentNode;

        if (clickBtn.closest('.interviewBtn')) {
            //console.log('hi interviewBtn , how are you baby?');
            interviewContainer.append(card)
            card.classList.add('border-l-5','border-green-400')

            cardStatus.innerText = "Interviewed"
            cardStatus.classList.remove('text-[#002C5C]', 'bg-white')
            cardStatus.classList.add('bg-green-50', 'text-green-500')
            jobCount();
        }

        if (clickBtn.closest('.rejectedBtn')) {
            //console.log('hi failureBtn , how are you baby?');
            rejectedContainer.append(card)
            card.classList.add('border-l-5', 'border-red-400')
            cardStatus.innerText = "Rejected"
            cardStatus.classList.remove('text-[#002C5C]', 'bg-white')
            cardStatus.classList.add('bg-red-50', 'text-red-500')
            jobCount();
        }

        if (clickBtn.closest('.deleteBtn')) {
            //console.log('hi , Sakil I am here');
            //console.log(parentNode);
            parentNode.removeChild(card);
            jobCount();
        }
    })
