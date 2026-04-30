import fs from 'fs';
import path from 'path';
import { generateKaggleProject, KAGLGE_DATASET_TEMPLATES } from './src/data/kaggleTemplates.js';

const DATASETS_DIR = './datasets';

if (!fs.existsSync(DATASETS_DIR)) {
  fs.mkdirSync(DATASETS_DIR);
}

const csvHeader = 'id,name,client,budget,actualCost,revenue,plannedMarginPct,currentMarginPct,resourceUtilizationPct,timelineProgress,scopeChangeCount,projectManager,deliveryStatus,description,modelUsed,datasetSource\n';

const convertToCSV = (projects) => {
  return csvHeader + projects.map(p => {
    return [
      p.id,
      `"${p.name}"`,
      `"${p.client}"`,
      p.budget,
      p.actualCost,
      p.revenue,
      p.plannedMarginPct,
      p.currentMarginPct,
      p.resourceUtilizationPct,
      p.timelineProgress,
      p.scopeChangeCount,
      `"${p.projectManager}"`,
      `"${p.deliveryStatus}"`,
      `"${p.description}"`,
      `"${p.modelUsed}"`,
      `"${p.datasetSource}"`
    ].join(',');
  }).join('\n');
};

Object.keys(KAGLGE_DATASET_TEMPLATES).forEach(type => {
  const projects = [];
  // Generate 50 projects for each template using both models
  for (let i = 0; i < 25; i++) {
    projects.push(generateKaggleProject(type, 'Regression'));
    projects.push(generateKaggleProject(type, 'Random Forest'));
  }

  const fileName = `${type.toLowerCase()}_dataset.csv`;
  const filePath = path.join(DATASETS_DIR, fileName);
  fs.writeFileSync(filePath, convertToCSV(projects));
  console.log(`Generated: ${filePath}`);
});

console.log('All datasets generated successfully in ./datasets folder.');
