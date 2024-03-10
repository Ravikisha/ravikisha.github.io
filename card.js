// File Download Card Component With Tailwind CSS
class DownloadCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class="p-4">
          <div class="font-bold text-xl mb-2">${this.getAttribute('title')}</div>
          <p class="text-gray-700 text-base">
            ${this.getAttribute('description')}
          </p>
        </div>
        <div class="px-6 py-4">
            <a href="${this.getAttribute('file')}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" download>
                Download
            </a>
        </div>
      </div>
    `;
  }
}

customElements.define('download-card', DownloadCard);