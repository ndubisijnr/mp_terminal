<script setup lang="ts">

</script>

<template>
  <div class="overflow-auto rounded-lg shadow">
    <table class="w-full border-b-2">
    <thead class="bg-white-50 border-white-200">
     <tr class="bg-white">
      <th class="p-3 text-sm font-semibold, tracking-wide text-left">Amount</th>
      <th class="p-3 text-sm font-semibold, tracking-wide text-left">Terminal ID</th>
      <th class="p-3 text-sm font-semibold, tracking-wide text-left"> Payment Type</th>
      <th class="p-3 text-sm font-semibold, tracking-wide text-left">Transaction ID</th>
      <th class="p-3 text-sm font-semibold, tracking-wide text-left">Date</th>
      <th class="p-3 text-sm font-semibold, tracking-wide text-left">Status</th>
      <th class="p-3 text-sm font-semibold, tracking-wide text-left">Action</th>
    </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr class="bg-gray">
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">N2000</td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">BIZ1234567A</td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">Transfer </td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">12344586998BIZ </td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">
          <span>05-11-2023</span>
          <br />
          <span>10:42:10am</span>
        </td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">
          <span class="p-1.5 text-xs font-medium uppercase text-orange-600 bg-orange-200 rounded-lg bg-opacity-50 tracking-wider">Pending</span>

        </td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">View receipt</td>
      </tr>
      <tr class="bg-white">
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">N2000</td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">BIZ1234567A</td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">Transfer </td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">12344586998BIZ </td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">
          <span>05-11-2023</span> <br />
          <span>10:42:10am</span>
        </td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">
          <span class="p-1.5 text-xs font-medium uppercase text-red-800 bg-red-300 rounded-lg bg-opacity-50 tracking-wider">Declined</span>

        </td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">View receipt</td>
      </tr>
      <tr class="bg-gray">
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">N2000</td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">BIZ1234567A</td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">Transfer </td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">12344586998BIZ </td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">
          <span>05-11-2023</span> <br />
          <span>10:42:10am</span>
        </td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">
          <span class="p-1.5 text-xs font-medium uppercase text-green-800 bg-green-300 rounded-lg bg-opacity-50 tracking-wider">Approved</span>
        </td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">View receipt</td>
      </tr>
      <tr class="bg-white">
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">N2000</td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">BIZ1234567A</td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">Transfer </td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">12344586998BIZ </td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">
          <span>05-11-2023</span>
          <br />
          <span>10:42:10am</span>
        </td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">
          <span class="p-1.5 text-xs font-medium uppercase text-orange-600 bg-orange-200 rounded-lg bg-opacity-50 tracking-wider">Pending</span>

        </td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">View receipt</td>
      </tr>
      <tr class="bg-gray">
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">N2000</td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">BIZ1234567A</td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">Transfer </td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">12344586998BIZ </td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">
          <span>05-11-2023</span>
          <br />
          <span>10:42:10am</span>
        </td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">
          <span class="p-1.5 text-xs font-medium uppercase text-orange-600 bg-orange-200 rounded-lg bg-opacity-50 tracking-wider">Pending</span>

        </td>
        <td class="whitespace-nowrap p-3 text-sm text-gray-700">View receipt</td>
      </tr>
    </tbody>

  </table>
    <div>

    </div>
  </div>
</template>

<style scoped>

</style>