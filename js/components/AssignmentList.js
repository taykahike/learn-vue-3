// AssignmentList.js
import Assignment from "./Assignment.js";
export default {
  components: {
    Assignment,
  },
  template: `
  <section v-show="assignments.length">
  <div class="flex justify-between items-center mb-2">
  <h2 class="font-bold mb-2">{{title}}  </h2>
  <span class="rounded-full bg-red-600 px-2 ml-2">{{assignments.length}}</span>
  </div>
  <div class="flex gap-2">
  <button @click="currentTAg = tag" v-for="tag in tags" class="border rounded px-1 py-px text-xs">{{tag}}</button>
  </div>
  <ul class="border border-gray-600 rounded divide-y divide-gray-600">
      <assignment 
      v-for="assignment in filteredAssignments"
      :key="assignment.id"
      :assignment="assignment"
      ></assignment>
  </ul>
</section>
    `,
  props: {
    assignments: Array,
    title: String,
  },
  data() {
    return {
      currentTag: "",
    };
  },
  computed: {
    tags() {
      return new Set(this.assignments.map((a) => a.tag));
    },
    filteredAssignments() {
      return this.assignments.filter((a) => a.tag === this.currentTag);
    },
  },
};
