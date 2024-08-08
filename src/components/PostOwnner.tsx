"use client";
interface PostOwnerProps {
  name : string;
}

export default function PostOwnner({}) {
   
  return 
    <div className="vstack gap-3">
          <div className="d-flex align-items-center gap-3">
            <img
              src="/profileImages/handsome.jpg"
              width="48"
              height="48"
              className="rounded-circle"
              style={{ objectFit: "cover" }}
            />
            <span className="fw-semibold fs-5">Panisa Pathapee 660610773</span>
          </div>
    </div>
    
}