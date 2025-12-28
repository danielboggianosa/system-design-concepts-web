const concepts = [
    { id: 1, title: "Client-Server Architecture", folder: "01-client-server" },
    { id: 2, title: "IP Address", folder: "02-ip-address" },
    { id: 3, title: "DNS", folder: "03-dns" },
    { id: 4, title: "Proxy / Reverse Proxy", folder: "04-proxy-reverse-proxy" },
    { id: 5, title: "Latency", folder: "05-latency" },
    { id: 6, title: "HTTP/HTTPS", folder: "06-http-https" },
    { id: 7, title: "APIs", folder: "07-apis" },
    { id: 8, title: "REST API", folder: "08-rest-api" },
    { id: 9, title: "GraphQL", folder: "09-graphql" },
    { id: 10, title: "Databases", folder: "10-databases" },
    { id: 11, title: "SQL vs NoSQL", folder: "11-sql-vs-nosql" },
    { id: 12, title: "Vertical Scaling", folder: "12-vertical-scaling" },
    { id: 13, title: "Horizontal Scaling", folder: "13-horizontal-scaling" },
    { id: 14, title: "Load Balancers", folder: "14-load-balancers" },
    { id: 15, title: "Database Indexing", folder: "15-database-indexing" },
    { id: 16, title: "Replication", folder: "16-replication" },
    { id: 17, title: "Sharding", folder: "17-sharding" },
    { id: 18, title: "Vertical Partitioning", folder: "18-vertical-partitioning" },
    { id: 19, title: "Caching", folder: "19-caching" },
    { id: 20, title: "Denormalization", folder: "20-denormalization" },
    { id: 21, title: "CAP Theorem", folder: "21-cap-theorem" },
    { id: 22, title: "Blob Storage", folder: "22-blob-storage" },
    { id: 23, title: "CDN", folder: "23-cdn" },
    { id: 24, title: "WebSockets", folder: "24-websockets" },
    { id: 25, title: "Webhooks", folder: "25-webhooks" },
    { id: 26, title: "Microservices", folder: "26-microservices" },
    { id: 27, title: "Message Queues", folder: "27-message-queues" },
    { id: 28, title: "Rate Limiting", folder: "28-rate-limiting" },
    { id: 29, title: "API Gateways", folder: "29-api-gateways" },
    { id: 30, title: "Idempotency", folder: "30-idempotency" }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('concepts-grid');
    if (grid) {
        concepts.forEach((concept, index) => {
            const card = document.createElement('a');
            card.href = `concepts/${concept.folder}/index.html`;
            card.className = 'concept-card';
            // Staggered animation
            card.style.animation = `fadeInDown 0.5s ease-out ${index * 0.05}s backwards`;
            
            card.innerHTML = `
                <div class="card-number">#${concept.id.toString().padStart(2, '0')}</div>
                <div class="card-title">${concept.title}</div>
            `;
            grid.appendChild(card);
        });
    }
});
