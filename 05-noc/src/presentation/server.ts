import { CheckService } from '../domain/use-cases/checks/check-service';
import { FileSystemDatasource } from '../infrastructure/datasources/file-system.datasource';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';
import { CronService } from './cron/cron-service';

const fileSystemlogRepository = new LogRepositoryImpl(
  new FileSystemDatasource(),

)

const urlsToCheck: string[] = [
  'https://openday.utec.edu.pe',
  'https://www1.utec.edu.pe',
  'https://utec.edu.pe',
  'https://pregrado.utec.edu.pe',
  'https://posgrado.utec.edu.pe',
  'https://utecventures.com',
];

export class Server {

  public static start() {

    console.log( 'Server started...' );

    CronService.createJob('*/10 * * * * *', () => {

        urlsToCheck.forEach(url => {
          new CheckService(fileSystemlogRepository, () => console.log( `${ url } is ok` ), ( error ) => console.log( `${error} for ${ url }` )).execute( url );
        });
        
      }
    );
  }
}


