import csv
import matplotlib.pyplot as plt
from datetime import datetime
from pathlib import Path

base_path = Path(__file__).parent

month_map = {
    'jan': 1, 'fev': 2, 'mar': 3, 'abr': 4,
    'mai': 5, 'jun': 6, 'jul': 7, 'ago': 8,
    'set': 9, 'out': 10, 'nov': 11, 'dez': 12
}

def gerar_burndown(csv_path: Path):
    sprint_name = csv_path.stem.replace('backlog_', '')
    datas, real, labels = [], [], []

    with open(csv_path, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            labels.append(row['Data'])
            day, mon = row['Data'].split('-')
            mon_num = month_map[mon.lower()]
            datas.append(datetime(2025, mon_num, int(day)))
            real.append(float(row['Real']))

    if not real:
        return
    
    ideal_start = real[0]
    ideal_end = 0
    n_points = len(real)
    ideal = [ideal_start - i*(ideal_start - ideal_end)/(n_points - 1) for i in range(n_points)]

    plt.figure(figsize=(10, 6))
    plt.plot(datas, real, marker='o', label='Real')
    plt.plot(datas, ideal, marker='x', linestyle='--', label='Ideal')
    plt.title(f'Burndown {sprint_name.capitalize()}')
    plt.xlabel('Data')
    plt.ylabel('Pontos Restantes')

    plt.xticks(datas, labels, rotation=45)

    plt.grid(True)
    plt.legend()
    plt.tight_layout()

    output_path = base_path / f'../public/burndown/{sprint_name}.png'
    output_path.parent.mkdir(parents=True, exist_ok=True)
    plt.savefig(output_path)
    plt.close()

csv_files = sorted(base_path.glob('backlog_sprint*.csv'))

if csv_files:
    for csv_file in csv_files:
        gerar_burndown(csv_file)
