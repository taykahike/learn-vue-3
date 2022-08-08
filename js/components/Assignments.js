// Assignments.js
import AssignmentList from "./AssignmentList.js";
export default {
  components: { AssignmentList },
  template: `
  <div class="space-y">
<assignment-list :assignments="inProgressAssignments" title="In Progress Assignments"></assignment-list>
<assignment-list :assignments="completedAssignments" title="Completed Assignments"></assignment-list>
</div>
`,
  data() {
    return {
      assignments: [
        { name: "Finish project", complete: false, id: 1 },
        { name: "Read chapter four", complete: false, id: 2 },
        { name: "Turn in homework", complete: false, id: 3 },
      ],
    };
  },
  computed: {
    completedAssignments() {
      return this.assignments.filter((assignment) => assignment.complete);
    },
    inProgressAssignments() {
      return this.assignments.filter((assignment) => !assignment.complete);
    },
  },
};
