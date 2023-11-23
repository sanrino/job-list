import React from 'react';

import { Card } from "../UI/Card";
import { Stack } from "../UI/Stack";
import { Badge } from '../UI/Badge';
import { Link, useLocation } from 'react-router-dom';
import { useUserContext } from '../hooks/context/useUserContext';
import { PROFILE_ROUTE } from '../utils/consts';

const JobPosition = (job) => {

  const {
    id,
    company,
    logo,
    new: isNew,
    featured,
    position,
    postedAt,
    contract,
    location,

    role,
    level,
    languages,
    tools,

    handleAddFilter
  } = job;

  const languagesJ = languages?.split(', ');

  const toolsJ = tools ? tools?.split(',') : [];

  const badges = [].concat(role ? role : [], level ? level : [], ...languagesJ, ...toolsJ);

  const { user } = useUserContext();
  const { isAuth } = user;

  const locationUrl = useLocation().pathname;

  return (
    <Card id={id} isFeatured={featured}>

      <div className="job-position">
        <div className="job-position-info">
          {
            logo?.length ?
              <img className="job-position-avatar" src={logo} alt={company} />
              :
              <img className="job-position-avatar" src="./images/default-img.jpg" alt={company} />
          }
          <div className="job-position-body">
            <div className="job-postion-company">
              <h3>{company}</h3>
              {(isNew || featured) && (
                <Stack>
                  {isNew && (
                    <Badge variant="rounded" colorScheme="primary">
                      NEW!
                    </Badge>
                  )}
                  {featured && (
                    <Badge variant="rounded" colorScheme="dark">
                      FEATURED
                    </Badge>
                  )}
                </Stack>
              )}
            </div>

            <h2 className="job-position-title">

              {
                isAuth && locationUrl === `${PROFILE_ROUTE}` ?
                  <>
                    <Link to={`/job-edit/${id}`}>
                      {position}
                    </Link>
                  </>
                  :
                  (position)
              }
            </h2>

            <Stack>
              {postedAt && <div className="job-position-meta">{postedAt}</div>}
              {contract && <div className="job-position-meta">{contract}</div>}
              {location && <div className="job-position-meta">{location}</div>}
            </Stack>
          </div>
        </div>

        {
          <Stack>
            {
              badges.map((badge) => (
                <Badge
                  key={badge}
                  onClick={() => {
                    if (locationUrl !== `${PROFILE_ROUTE}`) {
                      handleAddFilter({ badge, role, level, languages, tools })
                    }
                  }}
                >
                  {badge}
                </Badge>
              ))
            }
          </Stack>
        }

      </div>
    </Card>
  );
};

export { JobPosition };
