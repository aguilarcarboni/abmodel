import pandas as pd
from csv_serializers.deep_moonquake_serializer import load_deep_locations_csv_file
from csv_serializers.superficial_moonquake_serializer import load_superficial_locations_csv_file
from csv_serializers.artificial_locations_serializer import load_artificial_locations_csv_file

DATA_FILES_PATH = './data/'
DATA_FILES_EXPORT_PATH = './data/exports/'
CSV_EXPORT_NAME = 'moonquake_locations_and_types.json'

def main():
    # Script to execute
    deep_locations_data_frame = load_deep_locations_csv_file(DATA_FILES_PATH)
    #load_main_events_csv_file()
    superficial_locations_data_frame = load_superficial_locations_csv_file(DATA_FILES_PATH)
    artificial_locations_data_frame = load_artificial_locations_csv_file(DATA_FILES_PATH)

    final_file = pd.concat([
        superficial_locations_data_frame,
        artificial_locations_data_frame,
        deep_locations_data_frame
    ])
    print(final_file.to_string())
    export_path_and_name = DATA_FILES_EXPORT_PATH + CSV_EXPORT_NAME
    final_file.to_json(export_path_and_name, orient="records")

if __name__ == '__main__':
    main()
