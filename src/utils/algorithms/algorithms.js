const FCFS = (myprocses) => {
    let copy = JSON.parse(JSON.stringify(myprocses));
    const sorted = copy.sort((a, b) => {
        return a.arival - b.arival;
    });
    for (let i = 0; i < sorted.length; i++) {
        if (i > 0) {
            let wt =
                sorted[i - 1].arival +
                sorted[i - 1].time +
                sorted[i - 1].waiting -
                sorted[i].arival;
            sorted[i].waiting = wt;
            sorted[i].responseTime = wt;
        }
    }
    return sorted
};
const RR = (myprocses , qt) => {
    
    let curentTime = 0;
    let copy = JSON.parse(JSON.stringify(myprocses));
    while (1) {
        let done = true;
        for (let i = 0; i < copy.length; i++) {
            if (copy[i].time > 0) {
                done = false;
                if (copy[i].time > qt) {
                    curentTime += qt;
                    copy[i].time -= qt;
                } else {
                    curentTime += copy[i].time;
                    copy[i].waiting = curentTime - myprocses[i].time;
                    copy[i].time = 0;
                }
            }
        }
        if (done === true) {
            break;
        }
    }
    return copy;
};
export {FCFS , RR}