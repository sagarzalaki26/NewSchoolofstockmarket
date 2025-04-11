// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Fix for increment and decrement buttons
  setupQuantityButtons();
  
  // Fix for gaps in Transactions and Accounts sections
  fixTableLayoutGaps();
  
  // Setup navigation and other functionality
  setupNavigation();
  setupMobileMenu();
});

// Function to handle quantity increment and decrement
function setupQuantityButtons() {
  const decreaseBtn = document.getElementById('decreaseQty');
  const increaseBtn = document.getElementById('increaseQty');
  const qtyDisplay = document.getElementById('qtyDisplay');
  
  if (decreaseBtn && increaseBtn && qtyDisplay) {
      let quantity = parseFloat(qtyDisplay.textContent || '0.01');
      
      decreaseBtn.addEventListener('click', () => {
          if (quantity > 0.01) {
              quantity = Math.max(0.01, quantity - 0.01);
              qtyDisplay.textContent = quantity.toFixed(2);
          }
      });
      
      increaseBtn.addEventListener('click', () => {
          quantity += 0.01;
          qtyDisplay.textContent = quantity.toFixed(2);
      });
  }
}

// Function to fix the gap between horizontal scrollbar and content
function fixTableLayoutGaps() {
  // Target the specific table containers in Transactions and Accounts sections
  const tableContainers = document.querySelectorAll('#transactions .overflow-x-auto, #accounts .overflow-x-auto');
  
  tableContainers.forEach(container => {
      // Remove the classes that might be causing the gap
      container.classList.remove('-mx-4', 'sm:mx-0');
      
      // Apply direct CSS fixes to eliminate any gaps
      container.style.margin = '0';
      container.style.padding = '0';
      container.style.width = '100%';
      
      // Fix the table to ensure it fills the container properly
      const table = container.querySelector('table');
      if (table) {
          table.style.width = '100%';
          table.style.marginBottom = '0';
      }
      
      // Add custom CSS to fix the gap between scrollbar and content
      const style = document.createElement('style');
      style.textContent = `
          #transactions .overflow-x-auto, #accounts .overflow-x-auto {
              margin: 0 !important;
              padding: 0 !important;
              width: 100% !important;
              overflow-x: auto !important;
          }
          
          #transactions .overflow-x-auto::-webkit-scrollbar, 
          #accounts .overflow-x-auto::-webkit-scrollbar {
              height: 8px;
          }
          
          #transactions .overflow-x-auto::-webkit-scrollbar-track, 
          #accounts .overflow-x-auto::-webkit-scrollbar-track {
              background: #f1f1f1;
          }
          
          #transactions .overflow-x-auto::-webkit-scrollbar-thumb, 
          #accounts .overflow-x-auto::-webkit-scrollbar-thumb {
              background: #888;
              border-radius: 4px;
          }
          
          #transactions .overflow-x-auto table, 
          #accounts .overflow-x-auto table {
              margin-bottom: 0 !important;
          }
          
          #transactions .bg-gray-50, 
          #accounts .bg-gray-50 {
              margin-top: 0 !important;
          }
      `;
      document.head.appendChild(style);
  });
}

// Function to handle navigation
function setupNavigation() {
  document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", function (e) {
          e.preventDefault();

          // Get the target section
          const targetId = this.getAttribute("data-target");

          // Hide all sections
          document.querySelectorAll(".content-section").forEach((section) => {
              section.classList.remove("active");
          });

          // Show the target section
          document.getElementById(targetId).classList.add("active");

          // Update active link styling
          document.querySelectorAll(".nav-link").forEach((navLink) => {
              navLink.classList.remove("active");
          });
          this.classList.add("active");

          // Close sidebar on mobile after clicking
          if (window.innerWidth < 768) {
              document
                  .getElementById("sidebar")
                  .classList.add("-translate-x-full");
          }
      });
  });
}

// Function to handle mobile menu
function setupMobileMenu() {
  // Toggle sidebar
  const menuBtn = document.getElementById("menuBtn");
  if (menuBtn) {
      menuBtn.addEventListener("click", function () {
          const sidebar = document.getElementById("sidebar");
          sidebar.classList.toggle("-translate-x-full");
      });
  }

  // Close sidebar when clicking outside on mobile
  document.addEventListener("click", function (event) {
      const sidebar = document.getElementById("sidebar");
      const menuBtn = document.getElementById("menuBtn");

      if (
          sidebar && menuBtn &&
          window.innerWidth < 768 &&
          !sidebar.contains(event.target) &&
          !menuBtn.contains(event.target) &&
          !sidebar.classList.contains("-translate-x-full")
      ) {
          sidebar.classList.add("-translate-x-full");
      }
  });

  // Responsive adjustments
  window.addEventListener("resize", function () {
      const sidebar = document.getElementById("sidebar");
      if (sidebar) {
          if (window.innerWidth >= 768) {
              sidebar.classList.remove("-translate-x-full");
          } else {
              sidebar.classList.add("-translate-x-full");
          }
      }
  });
}


//Nevigation

