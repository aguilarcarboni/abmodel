import pandas as pd
from datetime import time, datetime

DATA_FILES_PATH = '../data/'
DATA_FILES_EXPORT_PATH = '../data/exports/'
CSV_FILE_NAME = 'nakamura_1979_sm_locations.csv' # 'nakamura_1983_ai_locations'
CSV_EXPORT_NAME = 'superficial_moonquake_locations.json'
CSV_EXPORT_COLS = {
    'label': '',
    'year': 'Year',
    'day': 'Day',
    'hour': 'H',
    'minutes': 'M',
    'seconds': 'S',
    'date': '',
    'lat': 'Lat',
    'lng': 'Long',
    'magnitude': 'Magnitude',
    'type': 'Shallow',  # Could be artificial, meteorite, shallow, deep

}



def create_label(row):
    return f"{row['year']}- Magnitude: {row['magnitude']}"

def calculate_date(row):
    date = pd.to_datetime(row["year"]*1000 + row["day"], format="%Y%j")
    date = date.replace(hour=row['hour'], minute=row['minutes'], second=row['seconds'])
    return date.isoformat()

def load_superficial_locations_csv_file(data_files_path = DATA_FILES_PATH):
    csv_file_path_and_name = data_files_path + CSV_FILE_NAME
    imported_data_frame = pd.read_csv(csv_file_path_and_name)
    export_data = {}

    for export_column_name in CSV_EXPORT_COLS:
        if export_column_name == 'type':
            export_data[export_column_name] = CSV_EXPORT_COLS[export_column_name]
            continue
        if export_column_name == 'label' or export_column_name == 'date':
            export_data[export_column_name] = ""
            continue

        original_column_name = CSV_EXPORT_COLS[export_column_name]
        export_data[export_column_name] = imported_data_frame[original_column_name]

    data_frame_to_export = pd.DataFrame(export_data)
    data_frame_to_export['label'] = data_frame_to_export.apply(create_label, axis=1)
    data_frame_to_export['date'] = data_frame_to_export.apply(calculate_date, axis=1)
    # print(data_frame_to_export.head().to_string())
    # export_path_and_name = DATA_FILES_EXPORT_PATH + CSV_EXPORT_NAME
    # data_frame_to_export.to_json(export_path_and_name, orient="records")

    return data_frame_to_export


if __name__ == '__main__':
    load_superficial_locations_csv_file()
