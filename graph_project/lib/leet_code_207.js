// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

var canFinish = function (numCourses, prerequisites) {
  let graph = buildGraph(prerequisites);
  let completed = new Set();
  let totalCourses = Object.keys(graph).length;
  let eligiableCourseExists = true;

  while (eligiableCourseExists) {
    eligiableCourseExists = false;

    for (let course in graph) {
      let everyReqMet = graph[course].every(pre => completed.has(pre));

      if (!completed.has(course) && everyReqMet) {
        completed.add(course);
        eligiableCourseExists = true;
      }
    }
  }

  return completed.size === totalCourses;
};

function buildGraph(arr) {
  let graph = {};
  arr.forEach(prereq => {
    let [course, pre] = prereq.map(String);

    if (course in graph) {
      graph[course].push(pre);
    } else {
      graph[course] = [pre];
    }

    if (!(pre in graph)) {
      graph[pre] = [];
    }
  })
  return graph;
}

//my attempt

  // var canFinish = function (numCourses, prerequisites) {
  //   let graph = {};
  //   let possible = true;
  //   prerequisites.forEach(arr => {
  //     if (!graph[arr[0]]) {
  //       graph[arr[0]] = [arr[1]];
  //     } else {
  //       graph[arr[0]].push(arr[1]);
  //     }

  //   });
  //   debugger
  //   for (let prereq in graph) {
  //     let visited = new Set();
  //     let queue = [prereq];
  //     while (queue.length) {
  //       let currentCourse = queue.shift();
  //       if (!graph[currentCourse] && graph[currentCourse] !== 0) continue;
  //       if (visited.has(currentCourse)) {
  //         possible = false;
  //         continue;
  //       }
  //       visited.add(currentCourse);
  //       queue.push(...graph[currentCourse]);
  //     }
  //   }

  //   return possible;
  // };

